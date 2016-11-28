import React from 'react'
import classnames from 'classnames'

import './Grocery.css'

const GroceryList = ({ onClearGroceries }) => {
  return (
  <article>
    <form></form>
    <button
      className=""
      onClick={onClearGroceries}
    >Clear Groceries</button>
    <ul>
      <li></li>
    </ul>
  </article>
  );
};

export default GroceryList;
