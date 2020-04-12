const express = require('express')
const Router = express.Router()
const {
  getAllContacts,
  addContact
} = require('../controller/controllers')


Router.get('/api/v1.0.0/contacts', getAllContacts)
Router.post('/api/v1.0.0/contacts', addContact)


module.exports = Router
