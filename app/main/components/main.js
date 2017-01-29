import React from 'react'

import Header from './header'
import GridContainer from '../../grid/containers/grid'

import styles from '../styles/main'

export default function Main (props) {
  return <div className={styles.container}>
    <Header />
    <GridContainer />
  </div>
}
