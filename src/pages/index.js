import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FullscreenContainer from "../components/fullscreen-container"

const HomePage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title="All posts" />
      <FullscreenContainer>
        <div>
          <h1>ARCHIVE</h1>
          <div style={{ fontStyle: "italic" }}>Music in a time of isolation.</div>
        </div>
      </FullscreenContainer>
    </Layout>
  )
}

export default HomePage


