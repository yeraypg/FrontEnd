/* eslint-disable */

import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:5050/api/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    ContentType: 'application/json'
  }
})

async function login(data){
  const response = await apiClient.post('user/login', data)
  return response.data

}

async function signUp(data) {
    const response = await apiClient.post('user/signUp', data)
    return response.data
}

export  {
    login,
    signUp
}

