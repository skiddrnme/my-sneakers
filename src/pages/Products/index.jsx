import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import s from './Products.module.scss';
import CardItems from '../../components/Card';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchShoes } from '../../redux/shoes/asyncActions';
const Products = () => {
  const dispatch = useDispatch();
  const shoes = useSelector((state) => state.shoes.shoes);
  


  useEffect(() => {
    dispatch(fetchShoes());
  }, [dispatch]);

  return (
    <div className={s.home}>
      {shoes.map((item) => (
        // <Link key={item.id} to={`/purchase/${item.id}`}>
          <CardItems item={item} />
        
      ))}
      
    </div>
  );
};

export default Products;
