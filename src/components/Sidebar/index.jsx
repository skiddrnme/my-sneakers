import { useState } from 'react';
import React from 'react';
import s from './Sidebar.module.scss';
import PriceFilter from '../PriceFilter/PriceFilter';
const Sidebar = () => {

  

  

  
  return (
    <aside className={s.sidebar}>
      <div className={s.info}>
        <h2>SNEAKERS</h2>
        <ul className={s.list}>
          <li className={s.link}>
            <a href="/">Original</a>
          </li>
          <li className={s.link}>
            <a href="/">Lifestyle</a>
          </li>
          <li className={s.link}>
            <a href="/">Basketball</a>
          </li>
          <li className={s.link}>
            <a href="/">Training</a>
          </li>
        </ul>

        <h2>FILTER</h2>
        <PriceFilter/>
      </div>
    </aside>
  );
};

export default Sidebar;
