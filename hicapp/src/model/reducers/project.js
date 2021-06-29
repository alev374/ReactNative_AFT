import * as types from 'model/actionTypes'

const initialState = null

export default function (state = initialState, action = '') {
  switch (action.type) {
    case types.RECEIVE_PROJECT:
      return action.project
    case types.CLEAR:
      return initialState
    case types.LOGOUT:
      return initialState
    default :
      return state
  }
}
