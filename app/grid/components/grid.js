import React from 'react'
import format from 'date-fns/format'
import eachDay from 'date-fns/each_day'
import subDays from 'date-fns/sub_days'

import styles from '../styles/grid'

export default function Grid (props) {
  const today = new Date()
  const dates = eachDay(subDays(today, 30), today)
  return <div className={styles.container}>
    <div className={styles.hContainer}>
      {
        dates.map((d, i) => {
          console.log(d)
          return <div key={i}>
            <span>{format(d, 'DD/MM/YYYY')}</span>
          </div>
        })
      }
    </div>
  </div>
}
