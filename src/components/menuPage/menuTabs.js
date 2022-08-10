import React, { useState } from "react"
import Product from "./product"
import { menu } from "./menudata"
import * as styles from './menuPage.module.scss'
const Tabs = () => {
  const [component, setComponent] = useState(menu[0].component)

  return (
    <>
      <div className={styles.wrapper}>
        {menu.map((item, i) => (
          <div
            onClick={() => setComponent(item.component)}
            key={item.text}
            onKeyDown={() => setComponent(item.component)}
            role="button"
            tabIndex={0}
          >
            <p className={styles.button}>{item.text}</p>
          </div>
        ))}
      </div>
      <ul className={styles.listWrapper}>
        {component.map((menu, index) => (
          <Product
            key={menu.name}
            name={menu.name}
            allergen={menu.allergen}
            price={menu.price}
            content={menu.content}
          />
        ))}
      </ul>
    </>
  )
}



export default Tabs