import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Navbar = props => {
  return (
    <div >
      <a href='/'>
        <h1 >Pragmatic Inteligent Consulting</h1>
      </a>
      <ul >
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/services'>Services</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
        <li>
          <NavLink to='/contacts'>Contacts</NavLink>
        </li>
        <li>
          <a href='https://mern-app-2020.herokuapp.com/api/v1.0.0/students'>
            API
          </a>
        </li>
      </ul>
    </div>
  )
}

Navbar.propTypes = {}

export default Navbar
