import axios from 'axios';

const KEY = 'AIzaSyBBhTCWPQNmso1qMN_RFhOYsc80Zz7D_3M'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

