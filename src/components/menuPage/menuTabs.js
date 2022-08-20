import React, { useState } from "react"
import Product from "./product"
import { menu } from "./menudata"
import * as styles from './menuPage.module.scss'
const Tabs = () => {
  const [component, setComponent] = useState(menu[0].component)

  return (
    <div className={styles.menuWrapper}>
      <div className={styles.wrapper}>
        {menu.map((item, i) => (
          <div
            onClick={() => setComponent(item.component)}
            key={item.text}
   
          >
            <p className={styles.button}>{item.text}</p>
          </div>
        ))}
      </div>
      <ul className={styles.listWrapper}>
        {component.map((menu, index) => (
          <Product
            key={index}
            name={menu.name}
            price={menu.price}
            content={menu.content}
          />
        ))}
      </ul>
    </div>
  )
}



export default Tabs