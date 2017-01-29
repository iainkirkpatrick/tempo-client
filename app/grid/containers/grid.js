import React from 'react'
import { connect } from 'react-redux'

import GridHeader from '../components/grid-header'
import Grid from '../components/grid'

import { getProjects } from '../../projects/actions'

import styles from '../styles/grid'

class GridContainer extends React.Component {
  componentWillMount () {
    const { getProjects } = this.props

    getProjects()
  }

  render () {
    return <div className={styles.container}>
      <GridHeader />
      <Grid />
    </div>
  }
}

export default connect(
  (state) => state,
  {
    getProjects
  }
)(GridContainer)
