import React from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Contacts from './components/Contacts'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
//import Students from './components/Students'
//import StudentDetail from './components/StudentDetail'
//import AddStudent from './components/AddStudent'
//import EditStudent from './components/EditStudent'

// AWS, Google cloud, Azure, Heroku, Digital Ocean, 

class App extends React.Component {
  state = {
    posts: [],
    formData1: {
      title: '',
      category: '',
      content: '',
      date: ''
    },
    contacts: [],
    formData2: {
      firstName: '',
      lastName: '',
      company: '',
      puhelin: '',
      email: ''
    },
    editing: false,
    errors: {}
  }
  componentDidMount() {
    this.fetchData()
  }
  handleChange = e => {
    const { name, value } = e.target
    const formData1 = { ...this.state.formData1, [name]: value }
    this.setState({ formData1 })
    const formData2 = { ...this.state.formData2, [name]: value }
    this.setState({ formData2 })
  }
  addPost= post => {
    this.fetchData()
    const formData1 = {
      title: '',
      category: '',
      content: '',
      date: ''
    }
    this.setState({ formData1 })
  }

  addContact = contact => {
    this.fetchData()
    const formData2 = {
      firstName: '',
      lastName: '',
      company: '',
      telephon: '',
      email: ''
    }
    this.setState({ formData2 })
  }



  fetchData = () => {

  const url = '/api/v1.0.0/contacts'
    axios
      .get(url)
      .then(response => {
        this.setState({ contacts: response.data })
      })
      .catch(err => {
        console.log(err.response.data)
        this.setState({ err: err.response.data })
      })
  }

  /*

  editStudent = student => {
    this.setState({ editing: true })
  }
  updateStudent = formData => {
    this.setState({ formData, editing: false })
    this.fetchData()
  }
  deleteStudent = () => {
    this.fetchData()
  }

  */

  render() {
    const { posts, formData1, contacts, formData2 } = this.state

    return (
      <BrowserRouter>
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route exact path='/contact/contac_form' render={props => ( <ContactForm {...props} formData2={formData2}
            handleChange={this.handleChange} addContact={this.addContact} /> )} />
          <Route path='/contacts' render={() => <Contacts contacts={contacts} />} />
          <Route path='/contact' component={Contact} />
          <Route path='/' component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App

/* 
    <Route exact path='/posts/add'
            render={props => ( <AddPost {...props}
                formData1={formData1}
                handleChange={this.handleChange}
                addPost={this.addPost}
              />
            )}

<Route
            exact
            path='/students/edit/:id'
            render={props => (
              <EditStudent
                {...props}
                handleChange={this.handleChange}
                updateStudent={this.updateStudent}
                formData={formData}
                students={students}
              />
            )}
          />

          <Route
            exact
            path='/students/:id'
            component={props => (
              <StudentDetail
                {...props}
                deleteStudent={this.deleteStudent}
                editing={this.editStudent}
                students={students}
              />
            )}
          />
          <Route
            path='/students'
            render={() => <Students students={students} />}
          />
          */