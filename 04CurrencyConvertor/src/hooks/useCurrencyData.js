import React, {useState, useEffect} from "react";

const useCurrencyData = (currency) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
                const apiResponse = await fetch(url);
                if (!apiResponse.ok) {
                    throw new Error(`Something went wrong: ${apiResponse.status}`);
                }
                const response = await apiResponse.json();
                setData(response);
            } catch (error) {
                setError(
                    error.message ||
                        "Failed to fetch currency data. Please check your connection and try again."
                );
                console.error(`Error fetching currency data: ${error.message}`);
            } finally {
                setLoading(false);
            }
        };

        if (!currency || typeof currency !== "string") {
            setLoading(false);
            setData({});
            setError("Invalid currency provided");
        } else {
            fetchData();
        }
    }, [currency]);

    return {data, loading, error};
};

export default useCurrencyData;
