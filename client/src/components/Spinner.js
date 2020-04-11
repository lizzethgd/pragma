import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'

const Spinner = props => {
  return (
    <div className='main-wrapper'>
      <h1>Loading.</h1>
    </div>
  )
}

Spinner.propTypes = {}

export default Spinner
