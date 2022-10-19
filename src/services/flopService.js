/* eslint-disable */

import apiClient from './index'

async function getAllflops(data) {
    const response = await apiClient.get('flop/', {
        headers: {
            'token': localStorage.token
        }, data
    })
    return response.data
}

export {
    getAllFlops
}
