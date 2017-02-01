import { combineReducers } from 'redux'

// TODO: projects / developers should be an enum
const dataType = function (state = 'projects', action) {
  switch (action.type) {
    case 'TOGGLE_DATA_TYPE':
      return state === 'projects' ? 'developers' : 'projects'
    default:
      return state
  }
}

export default combineReducers({
  dataType
})
