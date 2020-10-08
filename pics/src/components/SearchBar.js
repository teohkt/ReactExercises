import React from 'react';
import './App.css'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {search: null}
    }

    render() {
        return (
            <div className="ui fluid category search">
                <div className="ui icon input">
                    <label for="prompt"></label>
                    <input className="prompt" type="text" placeholder="Search Pictures" onChange={(e) => console.log(e.target.value)}/>

                    {/* 

                    onChange={(e) => console.log(e.target.value)} 
                    is equivalent to 
                    
                    onChange={this.onInputChange}
                    
                    with a function on the outside that is 

                    onInputChange(event){
                        event.target.value
                    }
                    
                    */}

                    <i className="search icon"></i>
                </div>
                <div className="results"></div>
            </div>
        );
    }
}

export default SearchBar;

