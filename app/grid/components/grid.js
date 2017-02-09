import React from 'react'
import eachDay from 'date-fns/each_day'
import subDays from 'date-fns/sub_days'

import Row from './row'

import styles from '../styles/grid'

export default function Grid (props) {
  const today = new Date()
  const dates = eachDay(subDays(today, 30), today)
  return <div className={styles.gridContainer}>
    {
      dates.map((date, i) => {
        return <Row key={i} date={date} data={props.data} dataType={props.dataType} />
      })
    }
  </div>
}
