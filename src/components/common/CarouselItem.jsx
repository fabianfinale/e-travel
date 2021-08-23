import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CarouselItem = (props) => {
  const { imagePath, active } = props;

  return (
    <div className={`carousel-item ${active ? 'active' : ''}`}>
      <img
        className='carousel__image'
        src={
          require(`../../assets/images/carousel-images/${imagePath}`).default
        }
        alt=''
      />

      <div className='container'>
        <div className='carousel-caption'>
          <h1>Example headline.</h1>
          <p>
            Some representative placeholder content for the first slide of the
            carousel.
          </p>
          <p>
            <Link
              className='btn btn-lg btn-secondary fw-bold border-white bg-white'
              to='#'>
              Sign up today
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  imagePath: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

CarouselItem.defaultProps = {
  active: false,
};

export default CarouselItem;
