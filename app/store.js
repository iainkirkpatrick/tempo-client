import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import apolloClient from './apollo-client'

import rootReducer from './root-reducer'

const enhancer = compose(
  applyMiddleware(thunk, apolloClient.middleware())
)

export default createStore(rootReducer, enhancer)
