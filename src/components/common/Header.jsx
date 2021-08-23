import React from 'react';
import Carousel from './Carousel';

const Header = (props) => {
  const items = [
    'atlas-green-hRRjixxRgfQ-unsplash.jpg',
    'frank-mckenna-eXHeq48Z-Q4-unsplash.jpg',
    'ian-dooley-3NCA3tbaE5I-unsplash.jpg',
    'fabio-comparelli-uq2E2V4LhCY-unsplash.jpg',
  ];

  return (
    <section>
      <Carousel items={items} />
    </section>
  );
};

Header.propTypes = {};

export default Header;
