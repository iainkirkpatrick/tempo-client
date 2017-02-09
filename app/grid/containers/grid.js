import React from 'react'
import { connect } from 'react-redux'
import { graphql, compose } from 'react-apollo'

import GridHeader from '../components/grid-header'
import Grid from '../components/grid'

import { toggleDataType } from '../../main/actions'

import { developersQuery, projectsQuery } from '../queries'

import { getGridProps } from '../getters'

import styles from '../styles/grid'

class GridContainer extends React.Component {
  render () {
    const { dataType, toggleDataType } = this.props
    const data = this.props[dataType]

    return <div className={styles.container}>
      <GridHeader data={data.loading ? [] : data[dataType]} dataType={dataType} toggleDataType={toggleDataType} />
      <Grid />
    </div>
  }
}

// TODO: figure out if it's a good idea to name the query with the same name as the data coming through, as ends up being developers.developers etc
export default compose(
  graphql(developersQuery, { name: 'developers' }),
  graphql(projectsQuery, { name: 'projects' }),
  connect(getGridProps, { toggleDataType })
)(GridContainer)
