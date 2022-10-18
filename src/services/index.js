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
  console.log(data)
  const response = await apiClient.post('user/login', data)
  return response.data

}

export  {
 login
}

