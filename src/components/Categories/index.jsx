import React, {useState} from 'react';
import s from "../Categories/Categories.module.scss"
const Categories = ({value, onClickCategory}) => {
  
  const categories = ["All", "Men", "Women", "Kids"]
 
  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li key={i} onClick={() => onClickCategory(i)} className={value === i ? 'active' : ''}>
            {categoryName}
          </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;
