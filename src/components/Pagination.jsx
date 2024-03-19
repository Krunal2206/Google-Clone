import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { pagination } from "../utils/Constants";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Pagination = ({ queries }) => {

    const { query } = useParams();
    const [page, setPage] = useState(pagination[0].startIndex);
    const navigate = useNavigate();

    const paginationClickHandler = (startIndex) => {
        setPage(startIndex);
        navigate(`/${query}/${startIndex}`);
    };

    useEffect(() => {
        setPage(pagination[0].startIndex);
    }, [query]);

    return (
        <div className="flex flex-col items-center py-14 max-w-[700px]">
            <div className="relative text-[#4285f4]">
                {queries.previousPage && (
                    <div
                        className="absolute left-[-30px] md:left-[-40px] top-[10px]"
                        onClick={() =>
                            paginationClickHandler(
                                queries.previousPage[0].startIndex
                            )
                        }
                    >
                        <FiChevronLeft size={20} className="cursor-pointer" />
                        <span className="cursor-pointer absolute left-[-5px] top-[30px]">
                            Prev
                        </span>
                    </div>
                )}

                <img className="w-[200px] md:w-[250px]" src={'/logo.webp'} alt="Logo" />

                {queries.nextPage && (
                    <div
                        className="absolute right-[-30px] md:right-[-40px] top-[10px]"
                        onClick={() =>
                            paginationClickHandler(
                                queries.nextPage[0].startIndex
                            )
                        }
                    >
                        <FiChevronRight size={20} className="cursor-pointer" />
                        <span className="cursor-pointer absolute left-[-5px] top-[30px]">
                            Next
                        </span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Pagination
