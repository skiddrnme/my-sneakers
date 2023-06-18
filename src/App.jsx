import React from 'react';
import Home from './pages/Home';
import MainLayout from './layout/MainLayout';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Purchase from './pages/Purchase/Purchase';
import Footer from './components/Footer';
import Products from './pages/Products';
import Cart from './pages/Cart';
import "./scss/style.scss"
const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              
              <Home />
              <Footer />
            </MainLayout>
          }
        />
        <Route
          exact
          path="/products"
          element={
            <MainLayout>
              <Header />
              <div className="homes">
                <Sidebar />
                <Products />
              </div>
              <Footer />
            </MainLayout>
          }
        />
        <Route
          path="/purchase/:id"
          element={
            <MainLayout>
              <Header />
              <Purchase />
              <Footer />
            </MainLayout>
          }
        />
      <Route path='/cart' element={<Cart/>}/>
      
      
      </Routes>
    </div>
  );
};

export default App;
