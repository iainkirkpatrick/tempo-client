import { combineReducers } from 'redux'

const projects = function (state = {}, action) {
  switch (action.type) {
    case 'GET_PROJECTS_SUCCESS':
      return action.payload.data.projects
    default:
      return state
  }
}

export default combineReducers({
  projects
})
