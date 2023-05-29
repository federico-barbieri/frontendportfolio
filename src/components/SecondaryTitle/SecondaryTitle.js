import React from 'react'
import styles from "./SecondaryTitle.module.css"

function SecondaryTitle({title}) {
  return (
    <h2 className={styles.secondaryTitle}>{title}</h2>
  )
}

export default SecondaryTitle