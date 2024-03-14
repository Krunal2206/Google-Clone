import ResultPageHeader from "./components/ResultPageHeader";
import ResultPageMainSection from "./components/ResultPageMainSection";
import Footer from "./components/Footer"
import { useContext } from "react";
import { StateContext } from "./stateProvider/StateProvider";
import useDebounce from "./hooks/useDebounce";
import useGoogleSearch from "./hooks/useGoogleSearch";

const Results = () => {

    const { input } = useContext(StateContext);
    const debouncedSearchTerm = useDebounce(input, 1000);
    const { data } = useGoogleSearch(debouncedSearchTerm);

    return (
        <>
            <ResultPageHeader />
            <ResultPageMainSection input={input} data={data} />
            <Footer input={input} data={data} />
        </>
    )
}

export default Results
