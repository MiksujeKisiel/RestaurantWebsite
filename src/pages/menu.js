import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import * as styles from "../components/index.module.css"
import About from "../components/about/about"
import Menu from "../components/menu/menu"
import Reservation from "../components/reservation/resevervation"
import Customers from "../components/customers/customers"
import Gallery from "../components/gallery/gallery"
import Footer from "../components/footer/footer"
import HeroSection from "../components/heros/heroSection"

const MenuPage = () => {

 


  return(
<Layout>
<HeroSection title="Food Menu"/>
  
    <Menu/>
    <Reservation/>
    <Gallery/>
    <Footer/>
  </Layout>
  )
}
  


export default MenuPage
