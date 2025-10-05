import React from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    onCurrencyChange,
    currencyDisabled = false,
}) {
    return (
        <div
            className="flex flex-col space-y-2 p-4 bg-gray-100 rounded-lg shadow-md border border-gray-600"
            style={{
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
        >
            <div>
                <label className="text-black text-sm font-medium block mb-2">
                    {label}
                </label>
            </div>
            <div className="flex items-center w-full">
                <input
                    type="number"
                    value={amount ?? "0"}
                    onChange={(e) => onAmountChange?.(Number(e.target.value))}
                    className="bg-gray-700 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="0"
                />
            </div>
            <div>
                <select
                    className="bg-gray-700 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange?.(e.target.value)}
                    disabled={currencyDisabled}
                >
                    {currencyOptions.map((option) => (
                        <option value={option} key={option}>
                            {option.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
