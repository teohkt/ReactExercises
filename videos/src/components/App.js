import React from 'react';


import SearchBar from './SearchBar';


class App extends React.Component {
    constructor(props){
        super(props);
        
    }

    onSearchSubmit = async (term) => {
        console.log(term);
    }

    render () {
        return (
            <div>
                <SearchBar searchValue={this.onSearchSubmit} />
            </div>
        )
    }

}

export default App;