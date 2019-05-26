import { AUTH_USER } from 'constants/action-types'
import isEmpty from 'lodash/isEmpty'

const initialState = {
  isAuthenticated: false,
  permissions: [],
  user: {}
}

export default (state = initialState, action = {}) => {
  switch (action.type) {

    case AUTH_USER:
      return Object.assign(state, {
        isAuthenticated: !isEmpty(action.data.user),
        permissions: action.data.permissions,
        user: action.data.user
      })

    default:
      return state
  }
}
