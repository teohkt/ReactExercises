import React from 'react';
import { Container, Header } from 'semantic-ui-react';

import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component {
    constructor(props){
        super(props);
        
        this.state = { videos:[], selectedVideo: null }
    }

    onSearchSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({videos: response.data.items})
    };

    onVideoSelect = video => {
        this.setState({ selectedVideo: video })
    }

    render () {
        return (
            <div>
                <Container>
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <div className='ui grid'>
                    <div className='ten wide column'>
                        <h1>Single Video Player</h1>
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className='six wide column'>
                        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />

                    </div>
                </div>
                </Container>
            </div>
        )
    }
}

export default App;