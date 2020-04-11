import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import Header from './Header'
import Spinner from './Spinner'

const Contacts = props => {

  
  let renderContent

    if (props.contacts.length) {
      renderContent = props.contacts.map((contact, i) => (
        <div key={contact._id} >
           <h4>{contact.firstName} {contact.lastName}</h4>
            <p>{contact.company}</p>
            <p>{contact.telephone}</p>
            <p>{contact.email}</p>
        </div>
      ))
    } else {
      renderContent = <Spinner />
    }

  return (
    <>
      <Header title='contacts' />
      <main>
        <div >
          <div >{renderContent}</div>
        </div>
      </main>
    </>
  )
}

Contacts.propTypes = {}

export default Contacts
