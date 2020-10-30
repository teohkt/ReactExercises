import React, { useState } from 'react';

import './SearchBar.css'

const SearchBar = ({ onSearchSubmit }) => {
    const [search, setSearch] = useState('Ghibli');

    const onFormSubmit = (event) => {
        event.preventDefault();
        onSearchSubmit(search);
    };

        return (
            <div className="ui fluid category search">
                <form onSubmit={onFormSubmit} >
                    <div className="ui icon input">
                        <label htmlFor="video-search"/>
                        <input className="video-search" type="text" placeholder="Search Videos"
                            value={search}
                            onChange={(event)=> setSearch(event.target.value)}
                        />
                        <i className="search icon"></i>
                    </div>

                </form>
            </div>
        );
};

export default SearchBar;

