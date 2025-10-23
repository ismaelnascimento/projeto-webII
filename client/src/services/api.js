import axios from 'axios';

const api = axios.create({
    baseURL: "https://glorious-succotash-rw9r9grjqv5cwqjr-3001.app.github.dev"
    // baseURL: "http://localhost:3001"
});

export default api;