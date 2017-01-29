import React from 'react'

import styles from '../styles/grid-header'

export default function GridHeader (props) {
  return <div className={styles.container}>
    {
      props.projects.map((proj) => {
        return <div className={styles.projectHeader}>
          <span className={styles.projectTitle}>{proj.title}</span>
        </div>
      })
    }
  </div>
}
