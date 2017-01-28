import { combineReducers } from 'redux'

const dummyAppName = function (state = 'TEMPO', action) {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  dummyAppName
})
