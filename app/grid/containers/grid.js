import React from 'react'
import { connect } from 'react-redux'
import { graphql, compose } from 'react-apollo'

import GridHeader from '../components/grid-header'
import Grid from '../components/grid'

import { getProjects } from '../../projects/actions'

import { projectsQuery } from '../queries'

import { getGridProps } from '../getters'

import styles from '../styles/grid'

class GridContainer extends React.Component {
  // componentWillMount () {
  //   const { getProjects } = this.props
  //
  //   getProjects()
  // }

  render () {
    const { data } = this.props

    return <div className={styles.container}>
      <GridHeader projects={data.loading ? [] : data.projects} />
      <Grid />
    </div>
  }
}

export default compose(
  graphql(projectsQuery),
  connect(getGridProps, { getProjects })
)(GridContainer)
