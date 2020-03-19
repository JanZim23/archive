import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const HomePage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title="All posts" />
      {/*<Bio />*/}
      <section>
        <h2>Music Technology</h2>
        <div style={{ fontStyle: "italic" }}>Coming soon.</div>
      </section>
    </Layout>
  )
}

export default HomePage


