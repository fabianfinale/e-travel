import React from 'react';
import PropTypes from 'prop-types';

const CarouselControls = (props) => {
  const { target } = props;

  return (
    <React.Fragment>
      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target={target}
        data-bs-slide='prev'>
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target={target}
        data-bs-slide='next'>
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </button>
    </React.Fragment>
  );
};

CarouselControls.propTypes = {
  target: PropTypes.string.isRequired,
};

CarouselControls.defaultProps = {
  target: '#myCarousel',
};

export default CarouselControls;
