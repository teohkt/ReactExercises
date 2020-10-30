import React, { useState, useEffect } from 'react';

import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(()=>{
        onSearchSubmit('Ghibli');
    }, [])

    const onSearchSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    };

    return (
        <div>
            <div className='ui container' >
                <SearchBar onSearchSubmit={onSearchSubmit} />
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='ten wide column'>
                            {/* <h1>Single Video Player</h1> */}
                            <VideoDetail video={selectedVideo} />
                        </div>
                        <div className='six wide column'>
                            <VideoList videos={videos} onVideoSelect={(e)=>setSelectedVideo(e)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;