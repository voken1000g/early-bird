import axios from 'axios'

const request = axios.create({
  baseURL: 'http://127.0.0.1:8080/'
  // timeout: 10000
})

export default request
