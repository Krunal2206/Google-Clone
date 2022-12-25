import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search'
import Footer from './Footer';
import { StateContext } from './StateProvider';
import './SearchPage.css';
import useGoogleSearch from './useGoogleSearch';
import { SearchOutlined, DescriptionOutlined, ImageOutlined, LocalOfferOutlined, MoreVertOutlined, RoomOutlined, Apps, SettingsOutlined } from '@material-ui/icons';
import useDebounce from './useDebounce';
import { Avatar, IconButton } from '@material-ui/core';

function SearchPage() {

    const { input } = useContext(StateContext);
    const debouncedSearchTerm = useDebounce(input, 1000);
    const { data } = useGoogleSearch(debouncedSearchTerm);

    return (
        <div className="searchPage">
            <div className="searchPage_header">
                <div className="searchPage_headerLeft">
                    <Link to='/'>
                        <img className="searchPage_logo" src="https://www.jobalign.com/wp-content/uploads/2018/01/google-logo-png-hd-11.png" alt="" />
                    </Link>
                    <div className="searchPage_headerBody">
                        <Search hideButtons />
                        <div className="searchPage_options">
                            <div className="searchPage_optionsLeft">
                                <div className="option" style={{ color: '#1a73e8', position: 'relative' }}>
                                    <div className="option_body">
                                        <SearchOutlined />
                                        <Link style={{ color: '#1a73e8' }} to={'#'}>All</Link>
                                    </div>
                                    <div className="option_active"></div>
                                </div>
                                <div className="option">
                                    <div className="option_body">
                                        <DescriptionOutlined />
                                        <Link to={'#'}>News</Link>
                                    </div>
                                </div>
                                <div className="option">
                                    <div className="option_body">
                                        <ImageOutlined />
                                        <Link to={'#'}>Images</Link>
                                    </div>
                                </div>
                                <div className="option">
                                    <div className="option_body">
                                        <LocalOfferOutlined />
                                        <Link to={'#'}>Shopping</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="option">
                                <div className="option_body">
                                    <RoomOutlined />
                                    <Link to={'#'}>Maps</Link>
                                </div>
                            </div>
                            <div className="option">
                                <div className="option_body">
                                    <MoreVertOutlined />
                                    <Link to={'#'}>More</Link>
                                </div>
                            </div>
                            <div className="searchPage_optionsRight">
                                <div className="option">
                                    <div className="option_body">
                                        <Link to={'/tools'}>Tools</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="searchPage_headerRight">
                    <IconButton style={{ color: 'grey' }}>
                        <SettingsOutlined />
                    </IconButton>
                    <IconButton>
                        <Apps />
                    </IconButton>
                    <Avatar style={{ marginLeft: '15px' }} />
                </div>
            </div>

            {
                input &&
                <div className="searchPage_results">

                    <p className="searchPage_resultCount">About {data?.searchInformation?.formattedTotalResults} results ({data?.searchInformation?.formattedSearchTime} seconds)</p>

                    {
                        data?.items?.map((item, index) => (
                            <div key={index} className="searchPage_result">
                                <a className="searchPage_result_link" href={item.link}>
                                    {
                                        item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                            <img className="searchPage_result_image" src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} alt="" />
                                        )
                                    }
                                    {item.link}
                                </a>
                                <a className="searchPage_result_Title" href={item.link}>
                                    <h3>{item.title}</h3>
                                </a>
                                <p className="searchPage_result_snippet">{item.snippet}</p>
                            </div>
                        ))
                    }

                </div>
            }

            <Footer term={input} data={data} />

        </div>
    )
}

export default SearchPage;
