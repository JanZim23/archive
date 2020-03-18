import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const AboutPage = ({ data, location }) => {
  const pageTitle = "Artists"
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location}>
      <SEO title={pageTitle} />
      <h1>{pageTitle}</h1>
      {posts.map(({ node }) => {
        const title = node.frontmatter.name || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              {/*<small>{node.frontmatter.date}</small>*/}
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___name], order: ASC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            name
            description
          }
        }
      }
    }
  }
`
