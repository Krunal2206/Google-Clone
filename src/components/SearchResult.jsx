import SearchResultHeader from "./SearchResultHeader"
import Footer from "./Footer"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/FetchApi";
import ResultPageMainSection from "./ResultPageMainSection";

const SearchResult = () => {

    const [result, setResult] = useState();
    const { query, startIndex } = useParams();

    const fetchSearchResults = async () => {
        const data = await fetchData(query, startIndex);
        setResult(data);
    };

    useEffect(() => {
        fetchSearchResults();
        window.scrollTo(0, 0);
    }, [query, startIndex]);

    if (!result) return;

    return (
        <div className="flex flex-col min-h-[100vh]">
            <SearchResultHeader />

            <ResultPageMainSection result={result} />

            <Footer />
        </div>
    )
}

export default SearchResult
