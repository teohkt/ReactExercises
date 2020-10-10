import React from 'react';
import './App.css'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {term: ''}
    }

    onFormSubmit = event => {
        // this prevents the page from refreshing and resetting user input
        event.preventDefault();

        this.props.whenSearch(this.state.term);
    };

    render() {
        const searchbarstyle = {
            display: "flex",
            justifyContent: "center",
            top:"5vh",
            height: "120px"
        }

        return (
            <div className="ui fluid category search" style={searchbarstyle}>
                <form onSubmit={this.onFormSubmit}>
                    <div className="ui icon input">
                        <label htmlFor="prompt"></label>
                        <input className="prompt" type="text" placeholder="Search Pictures" 
                            value={this.state.term}
                            
                            onChange={ e => this.setState({term: e.target.value}) }
                            
                        />

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
                </form>
                <div className="results"></div>
            </div>
        );
    }
}

export default SearchBar;

