import * as React from "react"
import * as styles from "./menu.module.scss"
import Product from "./product"
import { useStaticQuery, graphql } from "gatsby"

const Menu = ({  }) => {
  const data = useStaticQuery(graphql`
  query MyQuery {
   allMenuJson {
     nodes {
       title
       text
       src {
         childImageSharp {
           gatsbyImageData
         }
       }
     }
   }
  }
  `)
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.topSection}>
    <div>
    <h2 className={styles.title}>Most Popular Dishes</h2>
     <p className={styles.text}>Making a reservation at Délicious restaurant is easy and takes just a couple of minutes</p>
    </div>
     <button className={styles.button}>Full-Menu</button>
     </div>
    <Product data={data.allMenuJson}/>
    </div>
    </section>
  )
}


export default Menu
