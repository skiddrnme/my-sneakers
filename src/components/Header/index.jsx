import React, {useState} from 'react';
import Search from '../Search';
import s from './Header.module.scss';
import user from '../../assets/user.svg';
import basket from '../../assets/basket.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Categories from '../Categories';
import { fetchShoes } from '../../redux/shoes/asyncActions';
import { useEffect } from 'react';
const Header = () => {
  const shoes = useSelector((state) => state.shoes.shoes);
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState(0)

  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.header__logo} style={{ paddingRight: '36px' }}>
          <Link to="/">
            <h1>React Snickers</h1>
          </Link>
        </div>
        <div>
         
              <Categories value={categoryName} onClickCategory={(i) => setCategoryName(i)}/>
        </div>

        <Search />
        <div className={s.header__profile}>
          <div className={s.user}>
            <a href="">
              <img src={user} alt="" width={20} />
            </a>
          </div>
          <Link to={"/cart"}>
          <div className="corz">
            <a href="">
              <img src={basket} alt="" width={20} />
            </a>
          </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
