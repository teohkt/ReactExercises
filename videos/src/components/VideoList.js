import React from 'react';

import VideoItem from './VideoItem';

// class VideoList extends React.Component {
//     constructor(props) {
//         super(props);

        
//     };



//     render() {
//         return (
//             <div>
//                 {this.renderedList}
//             </div>
//         )
//     };
// };

const VideoList = ({videos}) => {
    const renderedList = videos.map((video) => {
        return <VideoItem video={video} />
    });
    
    return (
        <div className='ui relaxed divided list'>
            {renderedList}
        </div>
    )
}

export default VideoList;