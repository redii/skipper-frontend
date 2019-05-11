import { SET_CURRENT_VIEW } from '../constants/action-types'

const initialState = {
  currentView: {}
}

export default (state = initialState, action = {}) => {
  switch (action.type) {

    case SET_CURRENT_VIEW:
      return Object.assign(state, {
        currentView: action.view
      })

    default:
      return state
  }
}
