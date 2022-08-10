import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../navbar/Header"
import "./layout.css"

const Layout = ({ children }) => {
 return (
    <>
      <div>
      <Header/>
        <main>
          {children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
