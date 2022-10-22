/* eslint-disable */

import apiClient from './index'

async function getAllFlops(spotId) {
    const response = await apiClient.get('flop/', {
        headers: {
            'token': localStorage.token,
            'spotid': spotId
        }, data
    })
    return response.data
}

async function getOneFlop(data) {
    const response = await apiClient.get('flop/' + data._id, {
        headers: {
            'token': localStorage.token,
            'spotid': data.spot
        }
    })
    return response.data
}


export {
    getAllFlops,
    getOneFlop
}
