import { useContext } from "react";
import { StateContext } from "../stateProvider/StateProvider";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Search = ({ hideButtons = false }) => {

    const { input, setInput } = useContext(StateContext);
    const navigate = useNavigate();

    const search = (e) => {
        e.preventDefault();
        navigate("/search");
    }

    return (
        <>
            <div className="md:w-[584px] mx-auto mt-7 flex w-[92%] items-center rounded-full border hover:shadow-md">
                <div className="pl-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                <input type="text" className="w-full bg-transparent rounded-full py-[14px] pl-4 outline-none" value={input} onChange={(e) => setInput(e.target.value)} />

                <div className="pr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                </div>
            </div>

            {!hideButtons ? (
                <div className="mt-5 hidden sm:block space-x-10">
                    <button className="search_buttons" onClick={search}>Google Search</button>
                    <button className="search_buttons">I&apos;m Feeling Lucky</button>
                </div>
            ) : (
                <div className="mt-5 hidden sm:block space-x-10">
                    <button className="hidden" onClick={search}>Google Search</button>
                    <button className="hidden">I&apos;m Feeling Lucky</button>
                </div>
            )}

        </>
    )
}

export default Search
