import React from 'react';

import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { images: [] };
    }
    
    // Promist Method uses .then(){}
    // onSearchSubmit(term){
    //     axios.get('https://api.unsplash.com/search/photos', {
    //         params: {query: term},
    //         headers: {
    //             Authorization: 'Client-ID VPVdejBzMmMcFpIVa7WrBMHZBbdW5WIugQEtWSc_NDA'
    //         }
    //     }).then(response => {
    //         console.log(response);
    //     });
    // };

    // Async Method
    // async onSearchSubmit(term){
    //     const response = await axios.get('https://api.unsplash.com/search/photos', {
    //         params: {query: term},
    //         headers: {
    //             Authorization: 'Client-ID VPVdejBzMmMcFpIVa7WrBMHZBbdW5WIugQEtWSc_NDA'
    //         }
    //     });

    //     console.log(response.data.response);

    //     this.setState({ images:response.data.results});
    // };

    //need to bind "this"
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {query: term},
        });

        // console.log(response.data.results.length);
        this.setState({ images:response.data.results});
    };

    render() {

        return (
            <div>
                <div className="search-bar">
                    <SearchBar whenSearch={this.onSearchSubmit} />
                    {/* Found: {this.state.images.length} images */}
                </div>
                
                <div className="image-window">
                    <ImageList images={this.state.images} />
                </div>
            </div>
            
        );
    };
};

export default App;