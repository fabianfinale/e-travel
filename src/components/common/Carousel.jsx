import React from 'react';
import PropTypes from 'prop-types';
import CarouselIndicator from './CarouselIndicator';
import CarouselItem from './CarouselItem';
import CarouselControls from './CarouselControls';

const Carousel = (props) => {
  const { items } = props;

  return (
    <div id='myCarousel' className='carousel slide' data-bs-ride='carousel'>
      <div className='carousel-indicators'>
        {items.map((item, idx) => (
          <CarouselIndicator key={idx} idx={idx} active={idx === 0} />
        ))}
      </div>
      <div className='carousel-inner'>
        {items.map((item, idx) => (
          <CarouselItem key={idx} imagePath={item} active={idx === 0} />
        ))}
      </div>
      <CarouselControls />
    </div>
  );
};

Carousel.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Carousel;
