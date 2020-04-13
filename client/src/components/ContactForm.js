import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import Header from './Header'

const ContactForm = props => {
  const handleSubmit = e => {
    e.preventDefault()
    const formData2 = props.formData2
    const url = '/api/v1.0.0/contacts'
    axios.post(url, formData2).then(response => {
      console.log(response)
      console.log('saved')
    })
    props.addContact(formData2)
    props.history.push('/contacts')
  }

  return (
    <>
      <Header title='Contact Form' />
      <main>
        <div className='main-wrapper'>
          <form onSubmit={handleSubmit}>
            <div >
              <label htmlFor='firstName'>First Name</label>
              <input
                id='firstName'
                type='text'
                name='firstName'
                value={props.formData2.firstName}
                onChange={props.handleChange}
                placeholder='First name'
              />
            </div>
            <div >
              <label htmlFor='lastName'>Last Name</label>
              <input
                id='lastName'
                type='text'
                name='lastName'
                value={props.formData2.lastName}
                onChange={props.handleChange}
                placeholder='Last name'
              />
            </div>
            <div >
              <label htmlFor='companycountry'>Company</label>
              <input
                id='company'
                type='text'
                name='company'
                value={props.formData2.company}
                onChange={props.handleChange}
                placeholder='Company'
              />
            </div>

            <div >
              <label htmlFor='telephon'>Telephon</label>
              <input
                type='text'
                id='telephon'
                name='telephon'
                value={props.formData2.telephon}
                onChange={props.handleChange}
                placeholder='Telephone'
              />
            </div>
            <div >
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                name='email'
                cols='120'
                rows='10'
                value={props.formData2.email}
                onChange={props.handleChange}
                placeholder='Email'
              ></input>
            </div>

            <button className='btn' type='submit' id='submit-button'>
              Send
            </button>
          </form>
        </div>
      </main>
    </>
  )
}

ContactForm.propTypes = {}

export default ContactForm
