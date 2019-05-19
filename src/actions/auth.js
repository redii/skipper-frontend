import axios from 'axios'
import jwt from 'jsonwebtoken'
import history from '../utils/history'
import setAuthToken from '../utils/setAuthToken'
import { AUTH_USER } from '../constants/action-types'

const baseURL = process.env.BASEURL || 'http://localhost:4000'
const instance = axios.create({ baseURL: baseURL })

export function authUser(user) {
  return {
    type: AUTH_USER,
    user: user
  }
}

export function login(data) {
  return dispatch => {
    return instance.post('/api/user/login', { user: data }).then(res => {
      if (res.data.success) {
        const token = res.data.token
        localStorage.setItem('jwtToken', token)
        setAuthToken(token)
        dispatch(authUser(jwt.decode(token).user, false))
        history.push('/app/home')
      } else {
        // dispatch(authUser())
      }
    })
  }
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken')
    setAuthToken(false)
    dispatch(authUser({}))
    history.push('/')
  }
}
