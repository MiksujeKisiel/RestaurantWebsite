import * as React from "react"
import * as styles from "./hero.module.scss"
import { StaticImage } from "gatsby-plugin-image"

const HeroSection = ({ title }) => {


  return (
    <div className={styles.wrapper}>
      <div className={styles.smallWrapper}>
      <div className={styles.textWrapper}>
     <h1 className={styles.title}>{title}</h1>
     <h2 className={styles.text}>Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.</h2>
     </div>
      </div>

     <StaticImage placeholder="blurred" className={styles.image} src="../../images/herro.webp" alt="wee"  />
    </div>
  )
}


export default HeroSection
