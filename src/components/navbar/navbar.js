import * as React from "react"
import * as styles from "./navbar.module.scss"
import {Link} from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Icon from "../../assets/phone.svg";
const Navbar = ({ }) => {


return (
<nav className={styles.navbar}>
  <div className={styles.linkWrapper}>
  <StaticImage className={styles.logo} placeholder="blurred" src="../../images/logo.webp" alt="wee"  />
  <Link className={styles.link} to="/">
  Home
  </Link>
  <Link className={styles.link}  to="/menu">
  Menu
  </Link>
  <Link className={styles.link} to="/about">
  About
  </Link>
  <Link className={styles.link} to="/contact">
  Contact
  </Link>
  </div>

  <div className={styles.rightSection}>
  <Link className={styles.bookTableButton}>Book table</Link>
  <button className={styles.menuButton}><Icon className={styles.icon}/>+10 (78) 783 3674</button>

  </div>

</nav>
)}

export default Navbar