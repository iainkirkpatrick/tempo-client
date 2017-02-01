import React from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'

import StyleSheet from 'stilr'

import store from './store'
import apolloClient from './apollo-client'

import MainContainer from './main/containers/main'

// create stylesheet for stilr
let stylesheet = document.createElement('style')
stylesheet.textContent = `body { margin: 0; } ${StyleSheet.render()}`
document.head.appendChild(stylesheet)

// create <app /> to mount into
const mount = document.createElement('app')
document.body.appendChild(mount)

ReactDOM.render(
  <ApolloProvider store={store} client={apolloClient}>
    <MainContainer />
  </ApolloProvider>,
  document.body.querySelector('app')
)
