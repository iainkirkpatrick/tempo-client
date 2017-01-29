import { combineReducers } from 'redux'

import MainReducer from './main/reducer'
import ProjectsReducer from './projects/reducer'

export default combineReducers({
  main: MainReducer,
  projects: ProjectsReducer
})
