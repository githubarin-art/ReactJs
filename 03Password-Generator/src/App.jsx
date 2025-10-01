import {useState, useEffect, useCallback, useRef} from "react";
import React from "react";

function App() {
    const [length, setLength] = useState(8);
    const [isNumberAllow, setIsNumberAllow] = useState(false);
    const [isCharacterAllow, setIsCharacterAllow] = useState(false);
    const [password, setPassword] = useState("");
    const passwordRef = useRef(null);

    const passwordManager = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (isNumberAllow) str += "0123456789";
        if (isCharacterAllow) str += "!@#$%^&*()_+-=[]{}|;:,.<>?";
        for (let i = 1; i <= length; i++) {
            let index = Math.floor(Math.random() * str.length);
            pass += str.charAt(index);
        }
        setPassword(pass);
    }, [length, isNumberAllow, isCharacterAllow]);

    useEffect(() => {
        passwordManager();
    }, [length, isNumberAllow, isCharacterAllow]);

    const copyingToClipboard = () => {
        window.navigator.clipboard.writeText(password);
        passwordRef.current?.select();
    };

    return (
        <>
            <div className="bg-gradient-to-r from-purple-900 via-indigo-600 to-blue-900 p-8 rounded-3xl max-w-[900px] mx-auto shadow-2xl flex flex-col items-center gap-6 font-sans text-white">
                <h1 className="text-4xl font-extrabold tracking-wide drop-shadow-lg">
                    Password Generator
                </h1>

                <div className="flex rounded-3xl overflow-hidden shadow-lg bg-gradient-to-r from-gray-800 to-gray-900 w-full max-w-[850px]">
                    <input
                        type="text"
                        value={password}
                        readOnly
                        ref={passwordRef}
                        placeholder="Your password will appear here"
                        className="flex-grow bg-transparent px-6 py-4 text-lg font-mono tracking-wide placeholder-gray-400 focus:outline-none"
                    />
                    <button
                        onClick={copyingToClipboard}
                        className="bg-indigo-600 hover:bg-indigo-500 transition-colors px-6 flex items-center justify-center gap-2 text-lg font-semibold rounded-r-3xl"
                        aria-label="Copy password"
                    >
                        Copy
                    </button>
                </div>

                <div className="w-full flex flex-col gap-6">
                    <input
                        type="range"
                        min={6}
                        max={100}
                        className="w-full h-3 rounded-lg bg-gray-600 accent-indigo-500 shadow-inner transition duration-300 hover:accent-indigo-400 cursor-pointer"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                    />
                    Length: {length}
                    <div className="flex justify-start gap-10 px-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                defaultChecked={isNumberAllow}
                                name="Numbers"
                                className="accent-indigo-500 w-5 h-5 transition duration-300 hover:accent-indigo-400"
                                onChange={() => {
                                    setIsNumberAllow((prev) => !prev);
                                }}
                            />
                            <span className="text-white font-medium select-none">
                                Numbers
                            </span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                defaultChecked={isCharacterAllow}
                                onChange={() => {
                                    setIsCharacterAllow((prev) => !prev);
                                }}
                                name="Characters"
                                className="accent-indigo-500 w-5 h-5 transition duration-300 hover:accent-indigo-400"
                            />
                            <span className="text-white font-medium select-none">
                                Characters
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
