import React from 'react';

import s from '../Card/Card.module.scss';
import { Link } from 'react-router-dom';
const CardItems = ({item}) => {
  
  return (
    <div className={s.shoes}>
      <Link key={item.id} to={`/purchase/${item.id}`}>
        <div className={s.img_block}>
          <img className={s.img} src={item.imgUrl} alt="" width={200} />
        </div>
        </Link>
      
     <p>{item.price}</p>
     <p>{item.name}</p>
     
    </div>
  );
};

export default CardItems;
