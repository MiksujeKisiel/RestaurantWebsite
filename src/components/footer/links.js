import * as React from "react"
import * as styles from "./footer.module.scss"
import { Link } from "gatsby"



const Links = ({  }) => {


  return (
    <div>
        <p className={styles.text}></p>
  <Link className={styles.link} to="/">Home</Link>
  <Link className={styles.link} to="/">About</Link>
  <Link className={styles.link}  to="/">Services</Link>
  <Link className={styles.link} to="/">Contact</Link>
    </div>
  )
}


export default Links
