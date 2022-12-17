import { useState, useEffect } from "react";

const useGoogleSearch = (input) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_API_KEY}&cx=${process.env.REACT_APP_SEARCH_ENGINE}&q=${input}`)
                .then((res) => res.json())
                .then((data) => setData(data));
        }
        fetchData()
    }, [input]);

    return { data };
}

export default useGoogleSearch
