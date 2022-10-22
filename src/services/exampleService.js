/* eslint-disable */

import apiClient from './index'

async function getAllExamples(data) {
    const response = await apiClient.get('example/', {
        headers: {
            'token': localStorage.token,
            'spotid': data.spot,
            'flopid': data._id
        }, data
    })
    console.log(response.data)
    return response.data
}

export {
    getAllExamples
}
