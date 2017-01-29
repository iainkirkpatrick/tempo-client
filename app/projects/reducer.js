import { combineReducers } from 'redux'

const projects = function (state = {}, action) {
  switch (action.type) {
    case 'GET_PROJECTS_SUCCESS':
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  projects
})
