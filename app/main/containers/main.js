import React from 'react'
import { connect } from 'react-redux'

class MainContainer extends React.Component {
  render () {
    return <h1>Hello {this.props.main.dummyAppName}</h1>
  }
}

export default connect(
  (state) => state
)(MainContainer)
