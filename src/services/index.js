/* eslint-disable */

import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:5050/api/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        ContentType: 'application/json'
    }
})
