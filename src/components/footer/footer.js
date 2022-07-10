import * as React from "react"
import * as styles from "./footer.module.scss"
import Contact from "./contact"
import Links from "./links"
import { StaticImage } from "gatsby-plugin-image"

const Footer = ({  }) => {


  return (
    <footer>
      <div className={styles.footerWrapper}>
      <div className={styles.logoWrapper}>
      <StaticImage className={styles.logo} placeholder="blurred" src="../../images/logo.webp" alt="wee"  />
  <p>Land behold it created good saw after she'd Our set living. Signs midst dominion creepeth morning laboris nisi ufsit aliquip.</p>
      </div>

    
      <Links/>

        <Links/>
        <Contact/>
      </div>
 
    </footer>
  )
}


export default Footer
