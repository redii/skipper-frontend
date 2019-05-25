import { SET_CURRENT_VIEW } from 'constants/action-types'

export function setCurrentView(data) {
  return dispatch => {
    dispatch({
      type: SET_CURRENT_VIEW,
      view: {
        name: data.name
      }
    })
  }
}
