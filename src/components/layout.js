import React from "react"
import { rhythm, scale } from "../utils/typography"
import Header from "../components/header"

const Layout = ({ location, children }) => {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Header location={location} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Northeastern University Music Tech Seniors
      </footer>
    </div>
  )
}

export default Layout
