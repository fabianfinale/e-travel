import React from 'react';
import { Link } from 'react-router-dom';

const Copyright = () => {
  return (
    <footer className='text-white-50 copyright'>
      <p>
        Copyright &copy; 2021{' '}
        <Link
          to={{ pathname: 'https://github.com/fabianfinale' }}
          target='_blank'>
          Fabian Finalé Franqui
        </Link>
      </p>
    </footer>
  );
};

export default Copyright;
