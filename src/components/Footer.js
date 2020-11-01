import React from 'react'

class Footer extends React.Component {
  render() {
    return (

      <footer className="page-footer font-small blue">
          <div className="footer-copyright text-center py-3 flex-footer" id='footer-color'>
            <a href="https://fnder.netlify.app/"> F'nder</a>
            <a href="https://github.com/sammyschneider/Finder_Frontend" class="nav-link waves-effect waves-light">
                      <i class="fab fa-github"></i>
            </a>
          </div>
      </footer>

    )
  }
}

export default Footer
