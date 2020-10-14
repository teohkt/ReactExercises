import React from 'react';
import { Container, Header } from 'semantic-ui-react';

import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';


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
                <Container>
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <div className='ui grid'>
                    <div class='ten wide column'>
                        <h1>Single Video Player</h1>
                    </div>
                    <div class='six wide column'>
                        <VideoList videos={this.state.videos} />

                    </div>
                </div>
                </Container>
            </div>
        )
    }
}

export default App;