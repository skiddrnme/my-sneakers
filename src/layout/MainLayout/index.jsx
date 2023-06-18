import Header from '../../components/Header';
import Home from '../../pages/Products';
import Sidebar from '../../components/Sidebar';
import React from 'react';
import s from './MainLayout.module.scss';
const MainLayout = ({ children }) => {
  return <div className={s.layout}>{children}</div>;
};

export default MainLayout;
