import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const CenteredHero = () => {
  return (
    <div className='px-4 py-5 my-5 text-center'>
      <h1 className='display-1'>Our Portfolio</h1>
      <div className='col-lg-6 mx-auto'>
        <p className='lead mb-4'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eius
          laudantium accusantium dolor mollitia veniam nulla laborum placeat
          pariatur deleniti libero saepe obcaecati dicta id voluptates porro
          maxime reprehenderit quas expedita enim corporis, aut a tenetur. Error
          dolorem, quaerat reiciendis rerum delectus aspernatur, debitis
          corporis voluptatem exercitationem numquam ipsa iusto.
        </p>
        <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
          <Link className='btn btn-primary btn-lg px-4 gap-3' to='/portfolio'>
            <FontAwesomeIcon icon={['fas', 'briefcase']} /> View our portfolio
          </Link>
          <Link className='btn btn-outline-secondary btn-lg px-4' to='/contact'>
            <FontAwesomeIcon icon={['fas', 'phone']} /> Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CenteredHero;
