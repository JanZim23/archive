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
        <div style={{ fontStyle: "italic" }}>Symposium & Recital </div>
        <p>
          April 21 - Fenway Center <br />
          <small>Presentations 6pm </small>
          <br />
          <small>Performances 8pm</small>
        </p>
      </section>
    </Layout>
  )
}

export default HomePage


