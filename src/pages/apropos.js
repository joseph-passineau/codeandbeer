import React, { Component } from 'react'

import Layout from '../components/layout'
import { graphql } from 'gatsby'

export default class AProposPage extends Component {
  render () {
    const { data } = this.props

    return (
      <Layout>
        <h1>Apropos {data.site.siteMetadata.title}</h1>
        <p>
          Soirée récurente casual où on se forme en se lançant des défis technos
          et en patentant des side projects
        </p>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
