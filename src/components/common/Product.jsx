import React from 'react';
import PropTypes from 'prop-types';

const Product = (props) => {
  const { item } = props;
  return (
    <div className='col'>
      <div className='card shadow-sm'>
        <img
          className='img-fluid'
          src={require(`../../assets/images/${item.imagePath}`).default}
          alt={item.title}
        />
        {/* <svg
          className='bd-placeholder-img card-img-top'
          width='100%'
          height='225'
          xmlns='http://www.w3.org/2000/svg'
          role='img'
          aria-label='Placeholder: Thumbnail'
          preserveAspectRatio='xMidYMid slice'
          focusable='false'>
          <title>Placeholder</title>
          <rect width='100%' height='100%' fill='#55595c' />
          <text x='50%' y='50%' fill='#eceeef' dy='.3em'>
            Thumbnail
          </text>
        </svg> */}

        <div className='card-body'>
          <h2 className='card-title'>{item.title}</h2>
          <p className='card-text'>{item.text}</p>
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
            <small className='text-muted'>{item.rate}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Product;
