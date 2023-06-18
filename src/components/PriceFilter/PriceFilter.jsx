import { Button } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';

const PriceFilter = () => {
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();

  return (
    <div>
      <div>
        <form action="/">
          <p>От</p>
          <input
            type="text"
            placeholder="6990"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <br />
          <p>До</p>
          <input
            type="text"
            placeholder="18999"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </form>
      </div>
      <br />
      <button>Найти</button>
    </div>
  );
};

export default PriceFilter;
