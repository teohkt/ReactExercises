import React from 'react';

import SearchBar from './SearchBar';
import youtube from '../apis/youtube'


class App extends React.Component {
    constructor(props){
        super(props);
        
        this.state = { videos:[] }
    }

    onSearchSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({videos: response.data.items})
    };

    render () {
        return (
            <div>
                <SearchBar onSearchSubmit={this.onSearchSubmit} />

                I have {this.state.videos.length} videos
            </div>
        )
    }
}

export default App;