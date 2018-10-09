import React from 'react';
import PropType from 'prop-types';

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
                <a className="nav-link" href="/">User</a>
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