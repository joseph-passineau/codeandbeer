import { Link, StaticQuery, graphql } from 'gatsby'
import React, { Component } from 'react'

class EventsList extends Component {
  render () {
    const { data } = this.props

    return (
      <div>
        <h4>{data.allMarkdownRemark.totalCount} Soirées</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.frontmatter.slug}>
              <h3>{node.frontmatter.title}</h3>
            </Link>
            <div>{node.frontmatter.date}</div>
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
          filter: { frontmatter: { template: { eq: "event" } } }
        ) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
                slug
              }
              excerpt
            }
          }
        }
      }
    `}
    render={data => <EventsList data={data} {...props} />}
  />
)
