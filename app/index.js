import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'

import MainContainer from './main/containers/main'

ReactDOM.render(
  <Provider store={store}>
    <MainContainer />
  </Provider>,
  document.body
)
