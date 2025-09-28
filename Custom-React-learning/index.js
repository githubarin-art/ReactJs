let toggle = false;
function customReactRender(ele, cont) {
    const {type, props} = ele;
    const yourElement = document.createElement(type);
    yourButtonColor = {
        backgroundColor: props.style.backgroundColor,
        color: props.style.color,
    };
    console.log(props.style.backgroundColor);
    bodyColor = {
        backgroundColor: "#212121",
        color: "white",
    };
    for (const prop in props) {
        if (prop === "style") {
            Object.assign(yourElement.style, props[prop]);
            console.log(yourElement.style.backgroundColor);
        } else if (prop === "text") {
            yourElement.textContent = props[prop];
        } else if (prop === "onClick") {
            yourElement.addEventListener("click", (e) => {
                toggle = !toggle;
                if (toggle) {
                    document.body.style.backgroundColor = yourButtonColor.backgroundColor;
                    Object.assign(yourElement.style, bodyColor);
                } else {
                    document.body.style.backgroundColor = bodyColor.backgroundColor;
                    Object.assign(yourElement.style, yourButtonColor);
                }
                props[prop](e);
                console.log("button clicked");
            });
        } else {
            yourElement[prop] = props[prop];
        }
    }
    cont.appendChild(yourElement);
}
const customReactElement = {
    type: "button",
    props: {
        onClick: () => alert("Button clicked!"),
        text: "Click Me",
        style: {
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            height: "70px",
            width: "200px",
        },
    },
};

const container = document.getElementById("root");

customReactRender(customReactElement, container);
