import axios from 'axios';

export const key = "48741f7b0b93fe3800d6cadddf4dbc64ec274533";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;