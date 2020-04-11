import React from 'react'
import Navbar from './Navbar'
import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <header>
      <div>
        <Navbar />
        <h3 >{title}</h3>
      </div>
    </header>
  )
}

Header.propTypes = {}

export default Header
