import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Featurette = (props) => {
  const { item } = props;

  return (
    <React.Fragment>
      <div className='row featurette align-items-center'>
        <div className='col-md-7 featurette-header'>
          <h2 className='featurette-heading'>
            {item.heading}
            <span className='text-muted'> {item.subHeading}</span>
          </h2>
          <p className='lead'>{item.text}</p>
          <Link className='btn btn-link' to={item.link}>
            Read more...
          </Link>
        </div>
        <div className='col-md-5'>
          <Link to={item.link}>
            <img
              className='featurette-image img-fluid mx-auto'
              src={require(`../../assets/images/${item.image}`).default}
              alt=''
            />
          </Link>
        </div>
      </div>

      <hr className='featurette-divider' />
    </React.Fragment>
  );
};

Featurette.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Featurette;
