import React from 'react'
import format from 'date-fns/format'

import styles from '../styles/row'

export default function Row (props) {
  return <div className={styles.container}>
    <span>{format(props.date, 'DD/MM/YYYY')}</span>
    {
      props.data.map((d, i) => {
        return <div key={i} className={styles.cell}>
        </div>
      })
    }
  </div>
}
