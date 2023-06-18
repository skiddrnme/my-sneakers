import React from 'react';
import s from './Search.module.scss';
import logo from '../../assets/search.svg';
import { TextField } from '@mui/material';
const Search = () => {
  return (
    <div>
      <TextField id="outlined-basic" label="Поиск..." variant="outlined" />
    </div>
  );
};

export default Search;
