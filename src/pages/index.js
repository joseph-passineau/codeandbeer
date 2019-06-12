import React, { Component } from 'react'

import Countdown from '../components/countdown'
import EventsList from '../components/events-list'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import ProjectsList from '../components/projects-list'

export default class HomePage extends Component {
  render () {
    const { data } = this.props
    return (
      <Layout>
        <div
          className='cover bg-left bg-center-l'
          style={{
            backgroundImage:
              'url(https://s3.invisionapp-cdn.com/storage.invisionapp.com/boards/files/182647967.jpg?x-amz-meta-iv=1&x-amz-meta-ck=08817e81eeda845613e25e8b9e8cb8be&AWSAccessKeyId=AKIAJFUMDU3L6GTLUDYA&Expires=1556668800&Signature=%2BWTRjANFwiPxhrNOHJGJbUDJEdI%3D)'
          }}
        >
          <div className='bg-black-80 pv4-m pv5-l'>
            <div className='tl pa4 pt6 ph7-l'>
              <h1 className='f1 fw2 white-90 mb0 lh-title'>
                Ne manque pas la prochaine rencontre
              </h1>
              <h2 className='fw1 f2 white-80'>
                Comment faire un jeu avec Unity
              </h2>
              <a
                className='f6 no-underline grow dib v-mid bg-purple white ba b--blue ph3 pv2 mb3'
                href='/'
              >
                En savoir plus
              </a>
            </div>
          </div>
        </div>
        <div className='fl w-100 w-100-m w-40-l pa2 bg-gold white tc h5 flex items-center'>
          <div className='dtc v-mid tc white ph3 ph4-l w-100'>
            <h2 className='f1'>Prochaine soirée</h2>
            <h3 className='f2'>Jeudi le 12 Juin 2019</h3>
          </div>
        </div>
        <div className='fl w-100 w-100-m w-60-l pa2 bg-purple white tc h5 flex items-center'>
          <div className='dtc v-mid tc white ph3 ph4-l w-100'>
            <Countdown date={new Date('2019-04-17T03:24:00')} />
          </div>
        </div>
        <main className='pa4 ph7-l'>
          <div className='tc'>
            <Img
              fluid={data.logo.childImageSharp.fluid}
              className='v-mid dib w4 h4 br-100 v-mid mr3'
            />
            <h2 className='v-mid dib f-subheadline'>Code & Beer</h2>
            <h3 className='i f2 lh-copy ma0'>
              Soirée récurente casual où on se forme en se lançant des défis
              technos et en patentant des side projects
            </h3>
          </div>
          <div className='fl w-100 w-60-ns pa2'>
            <ProjectsList />
          </div>
          <div className='fl w-100 w-40-ns pa2'>
            <EventsList />
          </div>
        </main>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "contents/logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
