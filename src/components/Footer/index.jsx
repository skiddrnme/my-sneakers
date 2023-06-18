import React from 'react';
import yt from '../../assets/youtube.svg';
import tg from '../../assets/telegram.svg';
import inst from '../../assets/instagram.svg';
import gh from '../../assets/github.svg';
import s from '../Footer/Footer.module.scss';
import { Button } from '@mui/material';
const Footer = () => {
  return (
    <footer className={s.footer}>
      <nav>
        <ul>
          <li>
            <a href="/">О нас</a>
          </li>
          <li>
            <a href="/">Контакты</a>
          </li>
          <li>
            <a href="/">Новости</a>
          </li>
          <li>
            <a href="/">Помощь</a>
          </li>
          <li>
            <a href="/"></a>
          </li>
        </ul>
      </nav>
      <div className={s.email}>
        <p>Подпишитесь на рассылку</p>
        <input className={s.input} type="text" placeholder="Ваш e-mail" />
        <br />
        <Button className={s.btn} variant='contained'>Подписаться</Button>
        
      </div>
      <div className={s.copyright}>
        <p>© Tatlok Families Group, 2023</p>
        <div className={s.socMedia}>
          <img src={yt} alt="" width={40} />
          <img src={tg} alt="" width={40} />
          <img src={inst} alt="" width={40} />
          <img src={gh} alt="" width={40} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
