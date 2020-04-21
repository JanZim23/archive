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
          <div className={'content'} style={{ fontStyle: "italic" }}>
            Once a year all the graduating seniors of the Music Technology Major at Northeastern University come together
            to host a concert to demonstrate or perform the musical work they have done throughout their life so far.
            Under these extraordinary circumstances, with the majority of the world under lockdown, this year’s students
            will come together on this digital archive to present to our faculty, peers, friends and family that what we
            could not do in person. We wish everyone good health and hope you enjoy this online symposium.
          </div>
        </div>
      </FullscreenContainer>
    </Layout>
  )
}

export default HomePage


