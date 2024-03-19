import Pagination from "./Pagination";

const ResultPageMainSection = ({ result }) => {

    const { items, searchInformation, queries } = result;

    return (
        <main className="grow p-[12px] pb-0 md:pr-5 md:pl-20">
            <div className="flex text-sm text-[#70757a] mb-3">{`About ${searchInformation.formattedTotalResults} results in (${searchInformation.formattedSearchTime})`}</div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-6">
                <div className="col-span-2">
                    {items.map((item, index) => (
                        <div key={index} className="mb-6">
                            <a className="flex items-center text-[#70757a]" href={item.link}>
                                {
                                    item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                        <img className="w-6 h-6 object-contain mr-3" src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} alt="" />
                                    )
                                }
                                <p className="truncate">{item.link}</p>
                            </a>

                            <a className="hover:underline" href={item.link}>
                                <h3 className="font-medium">{item.title}</h3>
                            </a>

                            <p className="mt-1">{item.snippet}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Pagination queries={queries} />
        </main>
    )
}

export default ResultPageMainSection
