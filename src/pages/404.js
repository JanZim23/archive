import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FullscreenContainer from "../components/fullscreen-container"

const NotFoundPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title="404: Not Found" />
      <FullscreenContainer>
        <div>
          <h1>Not Found</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </FullscreenContainer>
    </Layout>
  )
}

export default NotFoundPage
