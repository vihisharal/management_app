import React from 'react';
import PropType from 'prop-types';
import {Link} from 'react-router-dom';
const Header =(props) => {
  const {hospitalName} = props;
  return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-success mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
          {hospitalName}
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                {/* <a className="nav-link" href="/">User</a> */}
                <Link className="nav-link" to="/"><i className="fa fa-home"></i>User</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/patient/add">Add Patient</a> */}
                <Link className="nav-link" to="/patient/add"><i className="fa fa-plus"></i>Add Patient</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/about">About</a> */}
                <Link className="nav-link" to="/about"><i className="fa fa-question"></i>About</Link>
              </li>                            
            </ul>
          </div>
        </div>
      </nav>
  )
}

Header.defaultProps={
  hospitalName :"Jankalyan Seva"
}

Header.propTypes={
  hospitalName: PropType.string.isRequired
}

export default Header;