import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

const Navbar = (props) => {
  const { navBarTransparent } = props;
  const navbarBackground = navBarTransparent ? 'transparent' : '';

  return (
    <nav className={`navbar nav-masthead fixed-top ${navbarBackground}`}>
      <div className='container justify-content-center justify-content-md-between'>
        <Link className='navbar-brand' to='/'>
          <img
            className='float-md-start mb-0'
            src={require('../../assets/images/logo/logo.png').default}
            alt='eTravel logo'
          />
        </Link>
        <div className='d-flex float-md-end'>
          <NavLink className='nav-link' to='/home'>
            Home
          </NavLink>
          <NavLink className='nav-link' to='/portfolio'>
            Portfolio
          </NavLink>
          <NavLink className='nav-link' to='/contact'>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  navBarTransparent: PropTypes.bool.isRequired,
};

export default Navbar;
