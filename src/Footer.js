import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = ({ term, data }) => {
    return (
        <div className={term && data ? "searchPage_footer" : "footer"}>
            <p>India</p>
            <hr />
            <div className="footer_left">
                <div>
                    <Link to={'#'}>About</Link>
                    <Link to={'#'}>Advertising</Link>
                    <Link to={'#'}>Bussiness</Link>
                    <Link to={'#'}>How Search Works</Link>
                </div>
                <div>
                    <Link to={'#'}>Privacy</Link>
                    <Link to={'#'}>Terms</Link>
                    <Link to={'#'}>Settings</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
