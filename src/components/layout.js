import React from "react"
import Header from "../components/header"

const Layout = ({ location, children }) => {
  return (
    <div>
      <Header location={location} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Northeastern University Music Tech Seniors
      </footer>
    </div>
  )
}

export default Layout
