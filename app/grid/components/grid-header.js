import React from 'react'

import styles from '../styles/grid-header'

export default function GridHeader (props) {
  const title = (data, dataType) => {
    return dataType === 'projects' ? data.title : data.firstName
  }

  return <div className={styles.container}>
    {
      props.data.map((d, i) => {
        return <div key={i} className={styles.projectHeader}>
          <span className={styles.projectTitle}>{title(d, props.dataType)}</span>
        </div>
      })
    }
  </div>
}
