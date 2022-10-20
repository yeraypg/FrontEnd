/* eslint-disable */

import apiClient from './index'

async function getAllSpots(id) {
    const response = await apiClient.get('spot/', {
        headers: {
            'token': localStorage.token
        }, id
    })
    return response.data
}

async function getOneSpot(id) {
    const response = await apiClient.get('spot/', {
        headers: {
            'token': localStorage.token
        }, id
    })
    return response.data
}

export {
    getAllSpots,
    getOneSpot,
}
