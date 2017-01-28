import { combineReducers } from 'redux'

import MainReducer from './main/reducer'

export default combineReducers({
  main: MainReducer
})
