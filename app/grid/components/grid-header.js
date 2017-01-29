import React from 'react'

import styles from '../styles/grid-header'

export default function Grid (props) {
  return <div className={styles.container}>
    {
      props.projects.map((proj) => {
        return <span>{proj.id}</span>
      })
    }
  </div>
}
