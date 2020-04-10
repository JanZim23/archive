import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import ReactPlayer from "react-player"
import styles from "./artist-page.module.css"
import FullscreenContainer from "../components/fullscreen-container"

class ArtistPageTemplate extends Component {

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

    const artistPage = this.props.data.artistsYaml
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={artistPage.name}
          description={artistPage.bio}
        />
        <article>
          <FullscreenContainer>
            <div className={styles.playerWrapper}>
              <ReactPlayer
                className={styles.reactPlayer}
                url={artistPage.bio_video}
                width={"100%"}
                height={"100%"}
                onPlay={this.handlePlay}
                onPause={this.handlePause}
                light
                playsinline
                controls={false}
              />
            </div>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {artistPage.name}
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
          </FullscreenContainer>
          <p>{artistPage.bio}</p>
          <h2>{artistPage.paper_title}</h2>
          <ReactPlayer
            // className={styles.reactPlayer}
            url={artistPage.paper_video}
            controls
          />
          <a href={`/files/${artistPage.paper}`}>Read the Paper (make me a button)</a>
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
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
                  ← {previous.name}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.name} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default ArtistPageTemplate

export const pageQuery = graphql`
  query ArtistBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    artistsYaml(fields: {slug: {eq: $slug}}) {
      acoustic_pieces {
        title
        date
        medium
        link
        score
        program_notes
      }
      fixed_media_pieces {
        title
        date
        link
        program_notes
      }
      bio
      bio_video
      name
      paper_title
      paper_video
      paper
    }
  }
`
