import React from 'react'

import styles from '../styles/row'

export default function Row (props) {
  return <div className={styles.container}>
    {
      props.data.map((d, i) => {
        return <div key={i} className={styles.cell}>
        </div>
      })
    }
  </div>
}
