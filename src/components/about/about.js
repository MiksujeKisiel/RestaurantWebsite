import * as React from "react"
import * as styles from "./about.module.scss"
import Text from "../text/text";
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const About = ({}) => {
  const data = useStaticQuery(graphql`
  query AboutQuery {
   allAboutJson {
     nodes {
      text
       title
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
        title="Best way to eat healthy food"
        text="Making a reservation at Délicious restaurant is easy and
        takes just a couple of minutes."
        />
      <ul className={styles.list}>
      {data.allAboutJson.nodes.map(product => {
     const { src, title, text} = product
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
            <h2  className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>
          </article>
        </li>
    
      
       </>
     )
   })}
      </ul>
    </section>
  )
}

export default About
