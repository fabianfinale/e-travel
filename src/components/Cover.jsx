import React from 'react';
import { Link } from 'react-router-dom';

const Cover = () => {
  return (
    <main className='cover h-100 px-3 d-flex justify-content-center align-items-center'>
      <div className='cover__background'></div>
      <div>
        <h1>Cover your page.</h1>
        <p className='lead'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          assumenda autem velit, praesentium dignissimos dicta vitae labore et.
          Necessitatibus, praesentium.
        </p>
        <p className='lead'>
          <Link
            to='#'
            className='btn btn-lg btn-secondary fw-bold border-white bg-white'>
            Learn more
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Cover;
