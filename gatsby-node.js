const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              template
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: path.resolve(
          `./src/templates/${node.frontmatter.template}.js`
        ),
        context: {
          slug: node.frontmatter.slug
        }
      })
    })
  })
}
