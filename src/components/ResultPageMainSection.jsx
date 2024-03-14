const ResultPageMainSection = ({ input, data }) => {
    return (
        <main className="mt-3 mx-5">
            {
                input && <>
                    <p className="text-[#70757a] text-sm">About {data?.searchInformation?.formattedTotalResults} results ({data?.searchInformation?.formattedSearchTime} seconds)</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-6">
                        <div className="col-span-2">
                            {
                                data?.items?.map((item, index) => (
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
                                ))
                            }
                        </div>
                    </div>
                </>
            }
        </main>
    )
}

export default ResultPageMainSection
