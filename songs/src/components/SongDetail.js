import React from 'react';

import {connect} from 'react-redux'

const SongDetail = ({ song }) => {
    if (!song) {
        return <div>No Song Selected</div>;
    }
    return (
        <div>
            <h3>Dtails for:</h3>
            <p>
                Title: {song.title}
            </p>
            <p>
                Duration: {song.duration}
            </p>
            
        </div>
    )
};

const mapStateToProps = (detail) => {
    return { song: detail.selectedSong}
}

export default connect(mapStateToProps)(SongDetail);