import { Link, StaticQuery, graphql } from 'gatsby'
import React, { Component } from 'react'

import Img from 'gatsby-image'

class Header extends Component {
  render () {
    const { data } = this.props

    return (
      <header className='fixed w-100 bg-black-80 top-0 z-1'>
        <nav className='db dt-l w-100 border-box ph5-l'>
          <Link
            to={`/`}
            className='db dtc-l v-mid white link dim w-100 w-25-l tc tl-l mb2 mb0-l'
            title='Accueil'
          >
            <Img
              fluid={data.logo.childImageSharp.fluid}
              className='dib w3 h3 br-100 v-mid mr3'
              alt={data.site.siteMetadata.title}
            />
            <h3 className='dib'>{data.site.siteMetadata.title}</h3>
          </Link>
          <div className='db dtc-l v-mid w-100 w-75-l tc tr-l'>
            <Link
              to={`/`}
              className='link dim white f6 f5-l dib mr3 mr4-l'
              title='Accueil'
            >
              Accueil
            </Link>
            <Link
              to={`/apropos/`}
              className='link dim white f6 f5-l dib mr3 mr4-l'
              title='A propos'
            >
              A Propos
            </Link>
          </div>
        </nav>
      </header>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        logo: file(relativePath: { eq: "contents/logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Header data={data} {...props} />}
  />
)
