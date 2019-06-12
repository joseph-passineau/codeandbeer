import 'tachyons/css/tachyons.css'
import '../styles/global.css'

import React, { Component } from 'react'

import Header from '../components/header'

export default class Layout extends Component {
  render () {
    const { children } = this.props

    return (
      <>
        <Header />
        <main>{children}</main>
      </>
    )
  }
}
