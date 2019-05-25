import { FETCH_USERS } from 'constants/action-types'

const initialState = {
  users: {
    data: {

    }
  }
}

export default (state = initialState, action = {}) => {
  switch (action.type) {

    case FETCH_USERS:
      return Object.assign(state, {
        users: {
          data: action.users
        }
      })

    default:
      return state
  }
}
