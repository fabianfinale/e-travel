import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = (props) => {
  const { item } = props;
  return (
    <div className='col'>
      <div className='card shadow-sm'>
        <img
          src={`https://source.unsplash.com/collection/4719294/800x600?${item.id}`}
          alt=''
        />
        <div className='card-body'>
          <h5 className='card-title'>{item.title}</h5>
          <p className='card-text'>{item.description}</p>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='btn-group'>
              <button
                type='button'
                className='btn btn-sm btn-outline-secondary'>
                View
              </button>
              <button
                type='button'
                className='btn btn-sm btn-outline-secondary'>
                Edit
              </button>
            </div>
            <small className='text-muted'>9 mins</small>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ProductCard;
