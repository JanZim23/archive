import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import FullscreenContainer from "../components/fullscreen-container"

const HomePage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title="All posts" />
      <FullscreenContainer>
        {/*<h2>Music Technology</h2>*/}
        <div>
          <h1>ARCHIVE</h1>
          <div style={{ fontStyle: "italic" }}>Music in a time of isolation.</div>
        </div>
      </FullscreenContainer>
    </Layout>
  )
}

export default HomePage


