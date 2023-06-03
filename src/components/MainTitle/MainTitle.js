import React from 'react'
import styles from "./MainTitle.module.css"

function MainTitle() {
  return (
    <h1 className={styles.mainTitle}><span className={styles.notMazy}>EVERY</span> MAZE <span className={styles.notMazy}>CAN BECOME</span> <span className={styles.amazing}>AMAZING</span></h1>
  )
}

export default MainTitle