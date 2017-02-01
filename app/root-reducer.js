import { combineReducers } from 'redux'
import apolloClient from './apollo-client'

import MainReducer from './main/reducer'
import ProjectsReducer from './projects/reducer'

export default combineReducers({
  main: MainReducer,
  projects: ProjectsReducer,
  apollo: apolloClient.reducer()
})
