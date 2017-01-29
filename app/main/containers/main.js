import React from 'react'
import { connect } from 'react-redux'

import Main from '../components/main'

class MainContainer extends React.Component {
  render () {
    console.log(this.props)
    return <Main dummyAppName={this.props.main.dummyAppName} />
  }
}

export default connect(
  (state) => state
)(MainContainer)
