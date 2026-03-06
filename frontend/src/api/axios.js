'use strict';

import axios from 'axios';

// Create an instance of Axios with default settings
const api = axios.create({
    baseURL: 'http://localhost:8001/api',
    headers: {
        'Authorization': `Bearer YOUR_ACCESS_TOKEN`, // replace YOUR_ACCESS_TOKEN with your actual token
        'Content-Type': 'application/json',
    },
});

export default api;