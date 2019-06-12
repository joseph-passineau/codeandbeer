import React, { Component } from 'react'

import Layout from '../components/layout'
import { graphql } from 'gatsby'

export default class ProjectTemplate extends Component {
  render () {
    const { data } = this.props
    const post = data.markdownRemark

    return (
      <Layout>
        <div>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
