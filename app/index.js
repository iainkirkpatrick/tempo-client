import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import StyleSheet from 'stilr'

import store from './store'

import MainContainer from './main/containers/main'

// create stylesheet for stilr
let stylesheet = document.createElement('style')
stylesheet.textContent = StyleSheet.render()
document.head.appendChild(stylesheet)

// create <app /> to mount into
const mount = document.createElement('app')
document.body.appendChild(mount)

ReactDOM.render(
  <Provider store={store}>
    <MainContainer />
  </Provider>,
  document.body.querySelector('app')
)
