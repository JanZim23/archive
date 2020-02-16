import React from "react"
import { rhythm, scale } from "../utils/typography"
import { useStaticQuery, graphql, Link } from "gatsby"

const NavLink = ({ to, children }) => {
  return (
    <li style={{ display: 'inline-block', marginRight: '1rem' }}>
      <Link to={to}>{children}</Link>
    </li>
  )
}

const Header = ({ location }) => {
  const data = useStaticQuery(graphql`
      query TitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)

  const rootPath = `${__PATH_PREFIX__}/`
  const siteTitle = data.site.siteMetadata.title

  const navLinks = (
    <nav>
      <NavLink to={'/about'}>About</NavLink>
      <NavLink to={'/artists'}>Artists</NavLink>
      <NavLink to={'/event'}>Event</NavLink>
    </nav>
  )

  const homeLink = (
    <Link
      style={{
        boxShadow: `none`,
        textDecoration: `none`,
      }}
      to={`/`}
    >
      {siteTitle}
    </Link>
  )

  if (location.pathname === rootPath) {
    return (
      <header>
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          {homeLink}
        </h1>
        {navLinks}
      </header>
    )
  } else {
    return (
      <header>
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          {homeLink}
        </h3>
        {navLinks}
      </header>
    )
  }
}


export default Header

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
