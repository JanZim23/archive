import React, { Component } from "react"
import { rhythm, scale } from "../utils/typography"
import hamburger from '../styles/hamburgers.min.css'
import styles from './header.module.css'
import { useStaticQuery, graphql, Link, StaticQuery } from "gatsby"

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {isExpanded: false};
    this.handleExpand = this.handleExpand.bind(this);
  }

  handleExpand() {
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded
    }));
  }

  render() {
    const rootPath = `${__PATH_PREFIX__}/`
    const siteTitle = this.props.data.site.siteMetadata.title
    const artists = this.props.data.allMarkdownRemark.edges

    const navLinks = (
      <nav>
        {artists.map(({ node }) => (
          <Link to={node.fields.slug} className={styles.navlink}>{node.frontmatter.name}</Link>
        ))}
      </nav>
    )

    const homeLink = (
      <Link
        className={styles.sitetitle}
        to={`/`}
      >
        {siteTitle}
      </Link>
    )

    // if (location.pathname === rootPath) {
    //   return (
    //     <header>
    //       <h1
    //         style={{
    //           ...scale(1.5),
    //           marginBottom: rhythm(1.5),
    //           marginTop: 0,
    //         }}
    //       >
    //         {homeLink}
    //       </h1>
    //       {navLinks}
    //     </header>
    //   )
    // } else {
      return (
        <header className={styles.header}>
          <button className={`hamburger hamburger--minus${this.state.isExpanded ? ' is-active' : ''}`} type={"button"} onClick={this.handleExpand}>
            <span className={"hamburger-box"}>
              <span className={"hamburger-inner"}/>
            </span>
          </button>
          <h1 className={styles.sitetitle}

            //               style={{
            //   // fontFamily: `Montserrat, sans-serif`,
            //   marginTop: 0,
            // }}
          >
            <Link to={`/`}>{siteTitle}</Link>
          </h1>
          {navLinks}
        </header>
      )
  }
  // }
}

export default props => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(sort: {fields: [frontmatter___name], order: ASC}) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                name
              }
            }
          }
        }
      }
    `}
    render={data => <Header data={data} {...props}/>}
  />
)
