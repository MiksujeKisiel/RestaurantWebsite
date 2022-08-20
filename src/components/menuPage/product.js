import React from "react"
import * as styles from './menuPage.module.scss'

const Product = ({ name, price, content }) => {
  return (
    <div className={styles.product}>
    
        <p className={styles.name}>
          {name}
        </p>
        <span className={styles.price}>{price}</span>
    
      <p className={styles.content}>{content}</p>
    </div>
  )
}
export default Product


