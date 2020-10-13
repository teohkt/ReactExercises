import React from 'react';

import './SearchBar.css'

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {term: ''}
        
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        console.log(this.state);

        this.props.onSearchSubmit(this.state.term);
    };

    onInputChange = (event) => {
        this.setState({term: event.target.value})
    }

    render() {
        return (
            <div className="ui fluid category search">
                <form onSubmit={this.onFormSubmit} >
                    <div className="ui icon input">
                        <label htmlFor="video-search"/>
                        <input className="video-search" type="text" placeholder="Search Videos"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                        <i className="search icon"></i>
                    </div>

                </form>
            </div>
        );
    };
};

export default SearchBar;

