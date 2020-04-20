import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
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
    const sliderSettings = {
      className: 'center',
      centerMode: true,
      slidesToShow: 1,
      dots: true,
      infinite: false,
      centerPadding: '60px',
      dotsClass: `slick-dots white-dots`
    }

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
                className={`${styles.heroVideo} ${!this.state.vidIsPlaying && styles.pauseFade} `}
                url={artistPage.bio_video}
                width={"100%"}
                height={"100%"}
                onPlay={this.handlePlay}
                onPause={this.handlePause}
                light
                playsinline
                controls
                playing
              />
            </div>
            {!this.state.vidIsPlaying &&
              <h1 style={{ marginBottom: rhythm(7) }}>
                {artistPage.name}
              </h1>
            }
          </FullscreenContainer>
          <div className={'content'}>
            <p dangerouslySetInnerHTML={{__html: artistPage.bio}} />
            {artistPage.paper_title &&
              <div>
                <h2>{artistPage.paper_title}</h2>
                {artistPage.paper_video &&
                <ReactPlayer
                url={artistPage.paper_video}
                width={"100%"}
                controls
                />
                }
                <a href={`/files${artistPage.fields.slug}${artistPage.paper}`}
                   className={'button'}
                   target="_blank"
                   rel="noopener noreferrer">Read the Paper</a>
              </div>
            }
            {artistPage.acoustic_pieces.length > 0 &&
              <div>
                <h2>Acoustic Works</h2>
                <Slider {...sliderSettings}>
                  {artistPage.acoustic_pieces.map((piece, index) => (
                    <div key={index}>
                      <h3>{piece.title}</h3>
                      <p>{piece.date}</p>
                      <p>{piece.medium}</p>
                      <p dangerouslySetInnerHTML={{__html: piece.program_notes}} />
                      <ReactPlayer
                        url={piece.link}
                        width={"100%"}
                        playsinline
                        controls
                        config={{soundcloud: {options: {visual: true}}}}
                      />
                      {piece.score &&
                        <a href={`/files${artistPage.fields.slug}${piece.score}`}
                           className={'button'}
                           target="_blank"
                           rel="noopener noreferrer">Score</a>
                      }
                    </div>
                  ))}
                </Slider>
              </div>
            }
            {artistPage.fixed_media_pieces.length > 0 &&
              <div>
                <h2>Fixed Media Works</h2>
                <Slider {...sliderSettings}>
                {artistPage.fixed_media_pieces.map((piece, index) => (
                  <div key={index} style={{paddingLeft: '10px', paddingRight: '10px'}}>
                    <h3>{piece.title}</h3>
                    <p>{piece.date}</p>
                    <p dangerouslySetInnerHTML={{__html: piece.program_notes}} />
                    <ReactPlayer
                      url={piece.link}
                      width={"100%"}
                      playsinline
                      controls
                      config={{soundcloud: {options: {visual: true}}}}
                    />
                  </div>
                ))}
                </Slider>
              </div>
            }
            <hr
              style={{
                marginBottom: rhythm(1),
              }}
            />
          </div>
        </article>

        <nav className={'content'}>
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
      fields {
        slug
      }
    }
  }
`
