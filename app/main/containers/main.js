import React from 'react'
import { connect } from 'react-redux'

import Main from '../components/main'

import { getProjects } from '../../projects/actions'

class MainContainer extends React.Component {
  componentDidMount () {
    const { getProjects } = this.props

    getProjects()
  }

  render () {
    console.log(this.props)
    return <Main dummyAppName={this.props.main.dummyAppName} />
  }
}

export default connect(
  (state) => state,
  {
    getProjects
  }
)(MainContainer)
