import React from 'react';
import PropTypes from 'prop-types';

const CarouselIndicator = (props) => {
  const { target, idx, active } = props;

  return (
    <button
      type='button'
      data-bs-target={target}
      data-bs-slide-to={idx}
      className={active ? 'active' : ''}
      aria-current={active}
      aria-label={`Slide ${idx}`}></button>
  );
};

CarouselIndicator.propTypes = {
  idx: PropTypes.number.isRequired,
  target: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

CarouselIndicator.defaultProps = {
  target: '#myCarousel',
  active: false,
};

export default CarouselIndicator;
