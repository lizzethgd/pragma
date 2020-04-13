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
//import Posts from './components/Posts'
//import PostDetail from './components/PostDetail'
//import AddPost from './components/AddPost'
//import EditPost from './components/EditPost'

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
      telephon: '',
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
    //const formData1 = { ...this.state.formData1, [name]: value }
    //this.setState({ formData1 })
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
    console.log(this.state)
  }



  fetchData = () => {

  const url = '/api/v1.0.0/contacts'
    axios
      .get(url)
      .then(response => {
        this.setState({ contacts: response.data })
        console.log(response)
      })
      .catch(err => {
        console.log(err.response.data)
        this.setState({ err: err.response.data })
      })
  }

  /*

  editPost = Post => {
    this.setState({ editing: true })
  }
  updatePost = formData => {
    this.setState({ formData, editing: false })
    this.fetchData()
  }
  deletePost = () => {
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
            path='/posts/edit/:id'
            render={props => (
              <Editpost
                {...props}
                handleChange={this.handleChange}
                updatePost={this.updatePost}
                formData={formData}
                posts={posts}
              />
            )}
          />

          <Route
            exact
            path='/posts/:id'
            component={props => (
              <PostDetail
                {...props}
                deletePost={this.deletePost}
                editing={this.editPost}
                posts={posts}
              />
            )}
          />
          <Route
            path='/posts'
            render={() => <Posts posts={posts} />}
          />
          */