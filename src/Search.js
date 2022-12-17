import { React, useContext } from 'react';
import { useHistory } from 'react-router';
import './Search.css';
import { Button } from '@material-ui/core';
import { Mic, SearchOutlined } from '@material-ui/icons';
import { StateContext } from './StateProvider';

function Search({ hideButtons = false }) {

    const history = useHistory();
    const { input, setInput } = useContext(StateContext);

    const search = (e) => {
        e.preventDefault();
        history.push("/search");
    }

    return (
        <form className="search">
            <div className="search_input">
                <SearchOutlined />
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <Mic />
            </div>

            {!hideButtons ?
                <div className="search_buttons">
                    <Button type="submit" variant="outlined" onClick={search}>Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div> :
                <div className="search_buttons">
                    <Button className="search_buttonsHidden" type="submit" variant="outlined" onClick={search}>Google Search</Button>
                    <Button className="search_buttonsHidden" variant="outlined">I'm Feeling Lucky</Button>
                </div>
            }

        </form>
    )
}

export default Search;
