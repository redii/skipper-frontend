import axios from 'axios'

import setAuthToken from 'utils/setAuthToken'
const token = localStorage.getItem('jwtToken')
setAuthToken(token)

const baseURL = process.env.BASEURL || 'http://192.168.178.2:4000'
const instance = axios.create({ baseURL: baseURL })

export default instance
