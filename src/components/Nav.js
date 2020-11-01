import React from 'react'

class Nav extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark nav-color fixed-top nav-pills">
          <a className="navbar-brand" href="https://fnder.netlify.app/">F'nder</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
            aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#" onClick={this.props.toggleSearch}>
               Search
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a onClick={this.props.renderFavorites} className="nav-link" href="#">
                 Favorites
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-user"></i> Profile </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
                <a className="dropdown-item" href="#">My account</a>
                <a className="dropdown-item" href="#">Log out</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav
