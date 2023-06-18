import React from 'react';
import s from '../Home/Home.module.scss';
import home from '../../assets/home2.jpg';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';
const Home = () => {
  return (
    <div className={s.home}>
      <img src={home} alt="" width={1900} />
      <div className={s.wrapper}>
        <h2 className={s.info}>
          Приветствуем вас в нашем магазине по продаже спортивной обуви. Здесь вы можете купить
          только самую оригинальную продукцию по приятным ценам!
        </h2>
        <Link to="/products">
          <Button className={s.btn} variant="contained">
            Перейти к покупкам
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
