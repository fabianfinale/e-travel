import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import Copyright from './common/Copyright';
import { useLocation } from 'react-router-dom';

const Layout = (props) => {
  const location = useLocation();
  const navBarTransparent = location.pathname === '/' ? true : false;
  const displayCopyright = location.pathname === '/' ? true : false;
  const displayFooter = location.pathname !== '/' ? true : false;

  return (
    <div className='d-flex w-100 h-100 mx-auto flex-column'>
      <Navbar navBarTransparent={navBarTransparent} />
      {props.children}
      {displayFooter && <Footer />}
      {displayCopyright && <Copyright />}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;
