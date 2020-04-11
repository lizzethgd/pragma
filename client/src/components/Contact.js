import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import Header from './Header'

const Contact = props => {
  return (
    <>
      <Header title='Contac Us' />
      <main>
        <div>
          <p>We value your ideas and help you find a better way to proceed</p>

          <NavLink to={`/contact/contac_form`}>Contact Form</NavLink>
          
          <address>
            Pragmatic Inteligent Consulting  <br />
            Finland, Helsinki <br />
            02210 <br />
            +358451000000 <br />
            Finland
          </address>
        </div>
      </main>
    </>
  )
}

Contact.propTypes = {}

export default Contact
//<i className='far fa-edit'></i>