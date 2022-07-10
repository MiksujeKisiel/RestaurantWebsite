import * as React from "react"
import * as styles from "./gallery.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Customers = ({  }) => {
  const data = useStaticQuery(graphql`
  query GalleryQuery {
   allGalleryJson {
     nodes {
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
 

<ul className={styles.gallery}>
{data.allGalleryJson.nodes.map(product => {
     const { src, title, text, name} = product
     const pathToImage = getImage(src)
     return (

        <GatsbyImage
           image={pathToImage}
           className={styles.image}
           alt={title}
         />
  

    
     )
   })}
</ul>
  )
}


export default Customers