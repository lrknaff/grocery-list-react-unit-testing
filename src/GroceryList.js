import React from 'react'
import classnames from 'classnames'

import Grocery from './Grocery'

const GroceryList = ({ disabled, onClearGroceries, groceries, id, name }) => {

  return (
  <article>
    <form></form>
    <button
      className="Grocery-clear-list"
      onClick={onClearGroceries}
      disabled={disabled}
    >Clear Groceries</button>
    <h2>Grocery List</h2>
    {groceries.map(i => <Grocery key={i.id} name={i.name}/>)}
  </article>
  );
};

export default GroceryList;
