import {useState, useEffect} from "react";
import money from "./assets/Money.jpg";
import {useCurrencyData} from "./Components/index.js";
import InputBox from "./Components/InputBox.jsx";

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const {data: currencyInfo, loading, error} = useCurrencyData(from);

    useEffect(() => {
        if (loading || error || !currencyInfo || !currencyInfo[from]) {
            setConvertedAmount(0);
        }
    }, [loading, error, currencyInfo, from]);

    const swapButton = () => {
        setFrom(to);
        setTo(from);

        const tempAmount = amount;
        setAmount(convertedAmount);
        setConvertedAmount(tempAmount);
    };

    const conversion = () => {
        // Manual trigger (redundant with useEffect, but kept for your button)
        if (currencyInfo && currencyInfo[from]) {
            const newAmount = parseFloat(amount) || 0;
            setConvertedAmount(
                (newAmount * parseFloat(currencyInfo[from]?.[to])).toFixed(2)
            );
        }
    };

    // Safely compute options only when data is loaded and valid
    const options =
        loading || error || !currencyInfo[from]
            ? [] // Empty array during loading/error, or pass to InputBox to handle
            : Object.keys(currencyInfo[from]);

    // console.log({currencyInfo, loading, error, options}); // For debugging
    // console.log(currencyInfo[from]);

    if (error) {
        return (
            <div
                className="font-bold text-white w-full h-screen flex justify-center items-center bg-cover bg-no-repeat text-4xl"
                style={{backgroundImage: `url(${money})`}}
            >
                <p className="text-red-500">Error: {error}</p>
            </div>
        );
    }

    return (
        <div
            className="font-bold text-white w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat text-4xl"
            style={{backgroundImage: `url(${money})`}}
        >
            <div className="flex flex-col border-2 p-4 h-1/1.5 w-1/2 rounded-2xl gap-2">
                <div>
                    <InputBox
                        label="From"
                        amount={amount}
                        onAmountChange={setAmount}
                        currencyOptions={options}
                        selectedCurrency={from}
                        onCurrencyChange={setFrom}
                        currencyDisabled={loading}
                        loading={loading}
                    />
                </div>

                {/* Swap button centered between the two input boxes */}
                <div className="flex justify-center">
                    <button
                        onClick={swapButton}
                        className="border-4 px-4 py-2 rounded-lg bg-blue-500 text-white text-sm hover:bg-blue-600 transition-colors flex items-center justify-center w-20" // Increased padding and width for better centering
                    >
                        Swap
                    </button>
                </div>
                {/* Add second InputBox for "To" once you implement conversion */}
                <div readOnly>
                    <InputBox
                        label="To"
                        amount={convertedAmount}
                        currencyOptions={options}
                        selectedCurrency={to}
                        onCurrencyChange={setTo}
                        currencyDisabled={false}
                        loading={loading}
                    />
                </div>
                <div>
                    <button
                        onClick={conversion}
                        className="border-4 w-full px-4 py-2 rounded-lg bg-blue-500 text-white text-xl hover:bg-blue-600 transition-colors flex items-center justify-center"
                        disabled={loading || error} // Optional: Disable during loading/error
                    >
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
