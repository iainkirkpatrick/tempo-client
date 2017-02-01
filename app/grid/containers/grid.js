import React from 'react'
import { connect } from 'react-redux'
import { graphql, compose } from 'react-apollo'

import GridHeader from '../components/grid-header'
import Grid from '../components/grid'

import { toggleDataType } from '../../main/actions'

import { projectsDevelopersQuery } from '../queries'

import { getGridProps } from '../getters'

import styles from '../styles/grid'

class GridContainer extends React.Component {
  render () {
    const { data, dataType, toggleDataType } = this.props

    return <div className={styles.container}>
      <GridHeader data={data.loading ? [] : data[dataType]} dataType={dataType} />
      <Grid />
      <button onClick={() => { toggleDataType() }}>TOGGLE</button>
    </div>
  }
}

export default compose(
  graphql(projectsDevelopersQuery),
  connect(getGridProps, { toggleDataType })
)(GridContainer)
