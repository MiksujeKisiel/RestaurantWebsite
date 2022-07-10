import * as React from "react"
import * as styles from "./reservation.module.scss"
import { StaticImage } from "gatsby-plugin-image"

const Reservation = ({ }) => {


return (
<section className={styles.section}>
  <div className={styles.wrapper}>
    <StaticImage src="../../images/reservation.jpg" alt="A dinosaur" className={styles.image} />
    <div className={styles.smallWrapper}>
      <h2 className={styles.title}>Book a table</h2>
      <p className={styles.text}>Making a reservation at Délicious restaurant is easy and takes just a couple of
        minutes.
      </p>
      <input className={styles.input} type="text" placeholder="Full Name"></input>
      <input className={styles.input} type="date" placeholder="Number of Guests"></input>
      <input className={styles.input} type="text" placeholder="Number of Guests"></input>
      <input className={styles.input} type="text" placeholder="Phone number"></input>
      <textarea className={styles.textArea} placeholder="Message"></textarea>
      <button className={styles.button}>Send Reservation</button>
    </div>
  </div>
</section>
)
}


export default Reservation