/* eslint-disable */

import apiClient from './index'

async function getAllExamples(data) {
    const response = await apiClient.get('example/', {
        headers: {
            'token': localStorage.token,
            'spotid': data.spotId,
            'flopid': data.flopId
        }, data
    })
    return response.data
}

export {
    getAllExamples
}
