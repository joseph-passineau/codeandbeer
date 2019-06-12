import { Link, StaticQuery, graphql } from 'gatsby'
import React, { Component } from 'react'

class ProjectsList extends Component {
  render () {
    const { data } = this.props

    return (
      <div>
        <h4>{data.allMarkdownRemark.totalCount} Projects</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.frontmatter.slug}>
              <h3>{node.frontmatter.title}</h3>
            </Link>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { template: { eq: "project" } } }
        ) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                slug
              }
              excerpt
            }
          }
        }
      }
    `}
    render={data => <ProjectsList data={data} {...props} />}
  />
)
