import * as React from "react"
import * as styles from "./text.module.scss"

const Text = ({text, title}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

export default Text