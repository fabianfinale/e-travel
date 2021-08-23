import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Copyright from './Copyright';

const Footer = () => {
  return (
    <footer className='footer pt-3 text-white d-flex flex-column align-items-center'>
      <div className='footer__content d-flex flex-column flex-md-row justify-content-around align-items-top w-100'>
        <div>
          <img
            className='p-2 img-fluid'
            src={require('../../assets/images/logo/logo.png').default}
            alt='eTravel logo'
          />
        </div>
        <div>
          <h2 className='footer__heading'>Our Products</h2>
          <ul>
            <li>
              <Link to='#'>Lodgings</Link>
            </li>
            <li>
              <Link to='#'>Alternative lodgings</Link>
            </li>
            <li>
              <Link to='#'>Tours & Excursions</Link>
            </li>
            <li>
              <Link to='#'>Transfer services</Link>
            </li>
            <li>
              <Link to='#'>Roundtrips</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='footer__heading'>About Us</h2>
          <ul>
            <li>
              <Link to='#'>Who we are</Link>
            </li>
            <li>
              <Link to='#'>Our vission</Link>
            </li>
            <li>
              <Link to='#'>Our mission</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='footer__heading'>Be part of us</h2>
          <ul>
            <li>
              <Link to='#'>Become a partner</Link>
            </li>
            <li>
              <Link to='#'>Work with us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='footer__heading'>Contact Us</h2>
          <ul>
            <li>
              <Link to='#'>
                <FontAwesomeIcon icon={['fas', 'envelope']} fixedWidth />{' '}
                info@etravel.com
              </Link>
            </li>
            <li>
              <Link to='#'>
                <FontAwesomeIcon icon={['fab', 'facebook']} fixedWidth />{' '}
                facebook.com/etravel
              </Link>
            </li>
            <li>
              <Link to='#'>
                <FontAwesomeIcon icon={['fab', 'instagram']} fixedWidth />{' '}
                instagram.com/etravel
              </Link>
            </li>
            <li>
              <Link to='#'>
                <FontAwesomeIcon icon={['fab', 'twitter']} fixedWidth />{' '}
                twitter.com/etravel
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='mt-3 pt-3 bg-dark w-100'>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
