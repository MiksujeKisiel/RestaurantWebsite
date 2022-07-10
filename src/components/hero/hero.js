import * as React from "react"
import * as styles from "./hero.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import Icon from "../../assets/button.svg";
const Hero = ({  }) => {


  return (
    <div className={styles.wrapper}>
    <div className={styles.smallWrapper}>
    <div className={styles.textWrapper}>
     <h1 className={styles.title}>Meet, Eat & Enjoy the true test</h1>
     <h2 className={styles.text}>Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.</h2>
    <div className={styles.buttonWrapper}>
    <button className={styles.menuButton}>Our menu</button>
     <button className={styles.playButton}><Icon className={styles.playSvg}/>Watch Video</button>
    </div>
     
     </div>
     </div>
     <StaticImage placeholder="blurred" className={styles.image} src="../../images/herro.webp" alt="wee"  />

    </div>
  )
}


export default Hero
