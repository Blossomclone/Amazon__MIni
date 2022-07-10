import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/e-commerce-31e3c/us-central1/api'//the api url
});

export default instance;