import { AUTH_USER } from 'constants/action-types'
import isEmpty from 'lodash/isEmpty'

const initialState = {
  isAuthenticated: false,
  user: {}
}

export default (state = initialState, action = {}) => {
  switch (action.type) {

    case AUTH_USER:
      return Object.assign(state, {
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      })

    default:
      return state
  }
}
