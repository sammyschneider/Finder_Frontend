import React from 'react'

class Footer extends React.Component {
  render() {
    return (

      <footer className="page-footer font-small blue">
          <div className="footer-copyright text-center py-3" id='footer-color'>
            <a href="https://fnder.netlify.app/"> F'nder</a>
            <a href="https://github.com/sammyschneider/Finder_Frontend"><span class="iconify fab" data-icon="logos:github" data-inline="false"></span></a>
          </div>
      </footer>

    )
  }
}

export default Footer
