import React from 'react';
import './Home.css';
import { Avatar, IconButton } from '@material-ui/core';
import { Apps } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Search from './Search'
import Footer from './Footer'

function Home() {
    return (
        <div className="home">
            <div className="home_header">
                <Link to="/gmail">Gmail</Link>
                <Link to="/images">Images</Link>
                <IconButton>
                    <Apps />
                </IconButton>
                <Avatar />
            </div>
            <div className="home_body">
                <img src="https://www.jobalign.com/wp-content/uploads/2018/01/google-logo-png-hd-11.png" alt='' />
                <div className="home_input">
                    <Search />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;
