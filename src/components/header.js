import React, { Component } from "react"
import { rhythm, scale } from "../utils/typography"
import styles from './header.module.css'
import { graphql, Link, StaticQuery } from "gatsby"
import { CSSTransition } from "react-transition-group"

class Header extends Component {
  constructor(props) {
    super(props);
    const rootPath = `${__PATH_PREFIX__}/`
    this.state = {isExpanded: props.location.pathname === rootPath};
    this.handleExpand = this.handleExpand.bind(this);
  }

  handleExpand() {
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded
    }));
  }

  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const artists = this.props.data.allArtistsYaml.edges

    const navLinks = (
      <nav>
        {artists.map(({ node }, index) => (
          <Link to={node.fields.slug} className={styles.navlink} key={index}>{node.name}</Link>
        ))}
      </nav>
    )

    return (
      <header className={styles.header}>
        <button className={`${styles.hamburgerMenu} hamburger hamburger--minus${this.state.isExpanded ? ' is-active' : ''}`} type={"button"} onClick={this.handleExpand}>
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
        <CSSTransition
          in={this.state.isExpanded}
          timeout={250}
          classNames={{
            enter: styles.artistNavEnter,
            enterActive: styles.artistNavEnterActive,
            exit: styles.artistNavExit,
            exitActive: styles.artistNavExitActive
          }}
          unmountOnExit
        >
          {navLinks}
        </CSSTransition>
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
        allArtistsYaml(sort: {fields: name, order: ASC}) {
          edges {
            node {
              fields {
                slug
              }
              name
            }
          }
        }
      }
    `}
    render={data => <Header data={data} {...props}/>}
  />
)
