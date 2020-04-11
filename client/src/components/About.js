import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'

const About = props => {
  return (
    <>
      <Header title='About Pragmatic Inteligent Consulting' />
      <main>
        <div >
          <section>
            <h4>
              <a href='#introduction' className='link'>
                #
              </a>
              Introduction
            </h4>
          </section>
        
          <section>
            <article>
                <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </article>
          </section>
          <section>
            <h4>
              {' '}
              <a href='#github' className='link'>
                #
              </a>{' '}
              Source code of this application is on github:
            </h4>
            <article>
              <p>
                Check the code on{' '}
                <a
                  href='https://github.com/lizzethgd/pragma'
                  className='link'
                  target='_blank'
                >
                  github
                </a>
              </p>
            </article>
          </section>
        </div>
      </main>
    </>
  )
}

About.propTypes = {}

export default About
