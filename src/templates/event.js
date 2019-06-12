import React, { Component } from 'react'

import Img from 'gatsby-image'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

export default class EventTemplate extends Component {
  render () {
    const { data } = this.props
    const post = data.markdownRemark

    return (
      <Layout>
        <article>
          <header>
            <div
              className='cover bg-left bg-center-l'
              style={{
                backgroundImage: `url(${
                  post.frontmatter.image.childImageSharp.original.src
                })`
              }}
            >
              <div className='w-100 w-50-l bg-gold'>
                <div className='mw9 center pa4 pt6 ph4-l'>
                  <h3 className='f2 f1-m f-headline-l measure-narrow lh-title mv0'>
                    <span className='bg-black-90 lh-copy white pa1 tracked-tight'>
                      {post.frontmatter.title}
                    </span>
                  </h3>
                  <h4 className='f3 fw1 i'>{post.frontmatter.description}</h4>
                  <time className='f6 mb2 dib ttu tracked'>
                    <small>{post.frontmatter.date}</small>
                  </time>
                </div>
              </div>
            </div>
          </header>
          <div
            className='pa4 ph7-l mw9-l center'
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
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
        description
        date
        image {
          childImageSharp {
            original {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
