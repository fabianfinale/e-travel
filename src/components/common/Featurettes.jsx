import React from 'react';
import PropTypes from 'prop-types';
import Featurette from './Featurette';

const Featurettes = (props) => {
  const { items } = props;
  return (
    <div className='container featurettes'>
      <hr className='featurette-divider' />
      {items.map((featurette, idx) => (
        <Featurette key={idx} item={featurette} />
      ))}
    </div>
  );
};

Featurettes.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Featurettes;
