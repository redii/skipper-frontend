import { AUTH_USER } from 'constants/action-types'
import isEmpty from 'lodash/isEmpty'

const initialState = {
  isAuthenticated: false,
  permissions: [],
  admin: false,
  name: '',
  email: '',
  expiresIn: ''
}

export default (state = initialState, action = {}) => {
  switch (action.type) {

    case AUTH_USER:
      return Object.assign(state, {
        isAuthenticated: !isEmpty(action.data.name),
        permissions: action.data.permissions,
        admin: action.data.admin,
        name: action.data.name,
        email: action.data.email,
        expiresIn: action.data.exp
      })

    default:
      return state
  }
}
