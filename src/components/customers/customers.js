import * as React from "react"
import * as styles from "./customers.module.scss"
import Text from "../text/text"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Customers = ({  }) => {
  const data = useStaticQuery(graphql`
  query CustomersQuery {
   allCustomersJson {
     nodes {
      text
        name
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
<Text
title="What our customer says"
text="Making a reservation at Délicious restaurant is easy and takes just a couple of minutes."
/>
<ul className={styles.list}>
{data.allCustomersJson.nodes.map(product => {
     const { src, title, text, name} = product
     const pathToImage = getImage(src)
     return (
       <>
         <li className={styles.wrapper} key={data.title}>
        <article>
        <GatsbyImage
           image={pathToImage}
           className={styles.img}
           alt={title}
         />
            <p className={styles.text}>,,{text}"</p>
            <p  className={styles.title}>{name}</p>

          </article>
        </li>
    
      
       </>
     )
   })}
</ul>
    </section>
  )
}


export default Customers
