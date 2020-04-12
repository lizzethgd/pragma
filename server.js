require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 5000
const mongoose = require('mongoose')
const os = require('os')
const fs = require('fs')
const bodyParser = require('body-parser')
const Contact = require('./server/models/Contact')
const { showDateTime } = require('./server/my_modules/my_modules.js')
const Router = require('./server/routes/routes')
const path = require('path')
const cors = require('cors')

const app = express()

// to allow two ports exchange data
app.use(cors())
// Serving static files in express
app.use(express.static('public'))
// serving static files

app.use(express.static('public/assets'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// connect mongodb with the server
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (err) return console.log(err)
    console.log('The server is connected to MongoDB database')
  }
)

/*
// Middleware which run whenever the app is running
app.use((req, res, next) => {
  const user = os.hostname
  const page = req.url
  const date = showDateTime()
  const content = `${user} access ${page} page on ${date}\n`
  fs.appendFile('log.txt', content, err => {
    if (err) throw err
    // console.log('content has been saved')
  })
  // must thing to do
  next()
})

app.use('/', Router)

app.use(express.static(path.join(__dirname, '/client/build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'))
})*/

app.get('/api/v1.0.0/contacts', (req, res)=>{
  Contact.find({},(err, contacts)=>{
      if(err) return res.status(404).send('Not found')
      res.json(contacts)
      })
})

// listen port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`)
})