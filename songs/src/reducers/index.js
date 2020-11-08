// Reducers
import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Happy', duration: '3:45'},
        { title: 'Sad', duration: '2:23'},
        { title: 'Angry', duration: '1:35'},
        { title: 'Hungry', duration: '5:21'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    };
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});