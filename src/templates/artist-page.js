import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import ReactPlayer from "react-player"
import styles from "./artist-page.module.css"

class BlogPostTemplate extends Component {

  constructor(props) {
    super(props);
    this.state = {vidIsPlaying: false}
    this.handlePause = this.handlePause.bind(this)
    this.handlePlay = this.handlePlay.bind(this)
  }

  handlePause() {
    this.setState({vidIsPlaying: false})
  }

  handlePlay() {
    this.setState({vidIsPlaying: true})
  }


  render() {

    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.name}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <div className={styles.playerWrapper}>
              <ReactPlayer
                className={styles.reactPlayer}
                url={post.frontmatter.video}
                width={"100%"}
                height={"100%"}
                onPlay={this.handlePlay}
                onPause={this.handlePause}
                light
                playsinline
                controls
              />
            </div>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {post.frontmatter.name}
            </h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
              }}
            >
              {/*{post.frontmatter.date}*/}
            </p>
          </header>
          <section className={styles.content} dangerouslySetInnerHTML={{ __html: post.html }}/>
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <footer>
            {/*<Bio />*/}
          </footer>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.name}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.name} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        name
        description
        video
      }
    }
  }
`
