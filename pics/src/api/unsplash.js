import axios from 'axios';

// create template for custom request
export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID VPVdejBzMmMcFpIVa7WrBMHZBbdW5WIugQEtWSc_NDA'
    }
});