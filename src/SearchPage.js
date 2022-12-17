import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search'
import { StateContext } from './StateProvider';
import './SearchPage.css';
import useGoogleSearch from './useGoogleSearch';
import { SearchOutlined, DescriptionOutlined, ImageOutlined, LocalOfferOutlined, MoreVertOutlined, RoomOutlined } from '@material-ui/icons';

function SearchPage() {

    const { input } = useContext(StateContext);
    const { data } = useGoogleSearch(input);

    return (
        <div className="searchPage">
            <div className="searchPage_header">
                <Link to='/'>
                    <img className="searchPage_logo" src="https://www.jobalign.com/wp-content/uploads/2018/01/google-logo-png-hd-11.png" alt="" />
                </Link>
                <div className="searchPage_headerBody">
                    <Search hideButtons />
                    <div className="searchPage_options">
                        <div className="searchPage_optionsLeft">
                            <div className="option" style={{ color: '#1a73e8' }}>
                                <SearchOutlined />
                                <Link style={{ color: '#1a73e8', textDecoration: 'underline' }} to={'#'}>All</Link>
                            </div>
                            <div className="option">
                                <DescriptionOutlined />
                                <Link to={'#'}>News</Link>
                            </div>
                            <div className="option">
                                <ImageOutlined />
                                <Link to={'#'}>Images</Link>
                            </div>
                            <div className="option">
                                <LocalOfferOutlined />
                                <Link to={'#'}>Shopping</Link>
                            </div>
                            <div className="option">
                                <RoomOutlined />
                                <Link to={'#'}>Maps</Link>
                            </div>
                            <div className="option">
                                <MoreVertOutlined />
                                <Link to={'#'}>More</Link>
                            </div>
                        </div>
                        <div className="searchPage_optionsRight">
                            <div className="option">
                                <Link to={'/tools'}>Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                input &&
                <div className="searchPage_results">

                    <p className="searchPage_resultCount">About {data?.searchInformation?.formattedTotalResults} results ({data?.searchInformation?.formattedSearchTime} seconds)</p>

                    {
                        data?.items.map((item, index) => (
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

            {
                input && data ?
                    <div className="searchPage_footer">
                        <Link to={'#'}>Help</Link>
                        <Link to={'#'}>Send feedback</Link>
                        <Link to={'#'}>Privacy</Link>
                        <Link to={'#'}>Terms</Link>
                    </div> :
                    <div className="searchPage_footer_bottom">
                        <Link to={'#'}>Help</Link>
                        <Link to={'#'}>Send feedback</Link>
                        <Link to={'#'}>Privacy</Link>
                        <Link to={'#'}>Terms</Link>
                    </div>
            }


        </div>
    )
}

export default SearchPage;
