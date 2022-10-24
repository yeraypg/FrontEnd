/* eslint-disable */

import apiClient from './index'

async function getAllFlops(spotId) {
    const response = await apiClient.get('flop/', {
        headers: {
            'token': localStorage.token,
            'spotid': spotId
        }
    })
    return response.data
}

async function getOneFlop(data) {
    const response = await apiClient.get('flop/' + data.flopId, {
        headers: {
            'token': localStorage.token,
            'spotid': data.spotId
        }
    })
    return response.data
}


export {
    getAllFlops,
    getOneFlop
}
