const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const artistPage = path.resolve(`./src/templates/artist-page.js`)
  const result = await graphql(
    `
      {
        allArtistsYaml(sort: { fields: name, order: DESC }) {
          edges {
            node {
              fields {
                slug
              }
              name
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const pages = result.data.allArtistsYaml.edges

  pages.forEach((page, index) => {
    const previous = index === pages.length - 1 ? null : pages[index + 1].node
    const next = index === 0 ? null : pages[index - 1].node

    createPage({
      path: page.node.fields.slug,
      component: artistPage,
      context: {
        slug: page.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `ArtistsYaml`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
