import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title="About" />
      <h1>About</h1>
      <p>Coming soon...</p>
    </Layout>
  )
}

export default AboutPage

