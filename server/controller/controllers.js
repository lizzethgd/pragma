const Contact = require('../models/Contact')

function getAllContacts(req, res) {
  Contact.find({}, (err, contacts) => {
    if (err) return res.status(404).json({ message: 'Not found' })
    res.json(contacts)
  })
}

/*function getAllStudents(req, res) {
  Student.find({}, (err, students) => {
    if (err) return res.status(404).json({ message: 'Not found' })
    res.json(students)
  })
}

function getSingleStudent(req, res) {
  const id = req.params.id
  Student.findOne({ _id: id }, (err, student) => {
    if (err) return res.status(404).send('Not found')
    res.send(student)
  })
}*/

function addContact(req, res) {
  req.body.skills = req.body.skills.split(', ')
  const newContact = new Contact(req.body)
  newContact.save(err => {
    if (err) return res.status(404).send('Not found')
    res.redirect('/contacts')
  })
}

/*
function addStudent(req, res) {
  req.body.skills = req.body.skills.split(', ')
  const newStudent = new Student(req.body)
  newStudent.save(err => {
    if (err) return res.status(404).send('Not found')
    res.redirect('/students')
  })
}


function editStudent(req, res) {
  const id = req.params.id
  const { firstName, lastName, age, country, bio, skills } = req.body
  Student.findOne({ _id: id }, (err, student) => {
    if (err) return res.status(404).send(err)
    student.firstName = firstName
    student.lastName = lastName
    student.age = age
    student.country = country
    student.skills = skills
    student.bio = bio

    student.save(err => {
      if (err) return res.status(404).send(err)
      res.redirect('/students')
    })
  })
}

function deleteStudent(req, res) {
  const id = req.params.id
  Student.deleteOne({ _id: id }, (err, student) => {
    if (err) return res.status(404).send(err)
    console.log('deleted')
  })
}

module.exports = {
  getAllStudents: getAllStudents,
  //getSingleStudent: getSingleStudent,
  addStudent: addStudent,
  //editStudent: editStudent,
  //deleteStudent: deleteStudent
}*/


module.exports = {
  getAllContacts: getAllContacts,
  //getSingleContact: getSingleContact,
  addContact: addContact,
  //editContact: editContact,
  //deleteContact: deleteContact
}