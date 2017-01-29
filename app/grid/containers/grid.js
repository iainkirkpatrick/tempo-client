import React from 'react'
import { connect } from 'react-redux'

import GridHeader from '../components/grid-header'
import Grid from '../components/grid'

import { getProjects } from '../../projects/actions'

import { getGridProps } from '../getters'

import styles from '../styles/grid'

class GridContainer extends React.Component {
  componentWillMount () {
    const { getProjects } = this.props

    getProjects()
  }

  render () {
    const { projects } = this.props

    return <div className={styles.container}>
      <GridHeader projects={projects} />
      <Grid />
    </div>
  }
}

export default connect(
  getGridProps,
  {
    getProjects
  }
)(GridContainer)
