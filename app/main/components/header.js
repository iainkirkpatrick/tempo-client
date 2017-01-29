import React from 'react'

import styles from '../styles/header'

export default function Header (props) {
  return <div className={styles.container}>
    <div className={styles.profileButtonContainer}>
      <img src="http://placehold.it/50x50"/>
    </div>
    <h1 className={styles.heading}>TEMPO</h1>
    <div className={styles.profileButtonContainer}>
      <img src="http://placehold.it/50x50"/>
      <span>[username]</span>
    </div>
  </div>
}
