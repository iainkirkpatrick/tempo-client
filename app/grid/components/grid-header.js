import React from 'react'
import toUpper from 'lodash/toUpper'

import styles from '../styles/grid-header'

export default function GridHeader (props) {
  const title = (data, dataType) => {
    return dataType === 'projects' ? data.title : data.firstName
  }

  return <div className={styles.container}>
    <div className={styles.infoContainer}>
      <span className={styles.dataType}>{toUpper(props.dataType)}</span>
      <button onClick={() => { props.toggleDataType() }}>TOGGLE</button>
    </div>
    <div className={styles.headersContainer}>
      {
        props.data.map((d, i) => {
          return <div key={i} className={styles.projectHeader}>
            <span className={styles.projectTitle}>{title(d, props.dataType)}</span>
          </div>
        })
      }
    </div>
  </div>
}
