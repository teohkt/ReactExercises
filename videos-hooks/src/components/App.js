import React, { useState, useEffect } from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

import useVideos from '../hooks/useVideos';

const App = () => {

    const [selectedVideo, setSelectedVideo] = useState(null);

    const [videos, search] = useVideos('Ghibli')

    useEffect(()=>{
        setSelectedVideo(videos[0]);
    }, [videos]);

    return (
        <div>
            <div className='ui container' >
                <SearchBar onSearchSubmit={search} />
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='ten wide column'>
                            {/* <h1>Single Video Player</h1> */}
                            <VideoDetail video={selectedVideo} />
                        </div>
                        <div className='six wide column'>
                            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;