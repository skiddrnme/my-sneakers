import React, { useEffect, useState } from 'react';
import s from '../Purchase/Purchase.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@mui/material';
const Purchase = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get('https://644163a1fadc69b8e082e321.mockapi.io/items/' + id);
        setProduct(data);
      } catch (error) {
        alert('Ошибка при получении');
        navigate('/');
      }
    }
    fetchProduct();
  }, []);
  if (!product) {
    return <h1>Загрузка...</h1>;
  }

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className="product">
          <img src={product.imgUrl} alt="" width={350} />
        </div>
        <div className={s.info}>
          <div className="title">{product.name}</div>

          <h4 className="price">{product.price}</h4>

          <div className="btns">
            <Button>Добавить в корзину</Button>
            <Button>Купить</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
