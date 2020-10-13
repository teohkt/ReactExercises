import React from 'react';

import './SearchBar.css'

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {term: ''}
        
    }

    onFormSubmit = event => {
        event.preventDefault();

        console.log(this.state);
    }

    render() {
        return (
            <div className="ui fluid category search">
                <form onSubmit={this.onFormSubmit} >
                    <div className="ui icon input">
                        <input className="prompt" type="text" placeholder="Search Videos"
                            value={this.state.term}

                            onChange={ e => this.setState({term: e.target.value}) }
                        />
                        <i className="search icon"></i>
                    </div>

                </form>
            </div>
        );
    };
};

export default SearchBar;

