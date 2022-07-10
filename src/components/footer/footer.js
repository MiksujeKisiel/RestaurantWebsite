import * as React from "react"
import * as styles from "./footer.module.scss"
import Contact from "./contact"
import Links from "./links"
const Footer = ({  }) => {


  return (
    <footer>
        <img className="img"></img>
        <p></p>
        <img className="icon"></img>
        <img className="icon"></img>
        <img className="icon"></img>
        <Links/>
        <Contact/>
    </footer>
  )
}


export default Footer
