import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../store/products';
import HeroDivider from './common/HeroDivider';
import ProductCard from './common/ProductCard';

const Portfolio = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.entities.products.list);
  console.log('products :>> ', products);

  return (
    <div>
      <HeroDivider />
      <div className='album py-5 bg-light'>
        <div className='container'>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
            {products.map((product) => (
              <ProductCard key={product.id} item={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
