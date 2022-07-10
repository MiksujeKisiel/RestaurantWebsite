import * as React from "react"
import * as styles from "./product.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Product = () => {
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

     <ul className={styles.list}>
   
{data.allMenuJson.nodes.map(product => {
     const { src, title, text} = product
     const pathToImage = getImage(src)
     return (
       <>
          <li key={data.title}>
        <article>
        <GatsbyImage
           image={pathToImage}
           className={styles.image}
           alt={title}
         />
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
     <p className={styles.button}>Order now</p>
     </article>
        </li>
       </>
     )
   })}

     </ul>
   
  )
}



export default Product