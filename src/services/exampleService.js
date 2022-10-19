/* eslint-disable */

import apiClient from './index'

async function getAllExample(data) {
    const response = await apiClient.get('example/', {
        headers: {
            'token': localStorage.token
        }, data
    })
    return response.data
}

export {
    getAllExample
}
