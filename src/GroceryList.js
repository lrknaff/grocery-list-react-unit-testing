import React from 'react'

import Grocery from './Grocery'

const GroceryList = ({ groceries, onClear }) => {
  return (
  <article>
    <form></form>
    <button
      className="Grocery-clear-list"
      disabled={groceries ? false : true}
      onClick={onClear}
    >Clear Groceries</button>
    <h2>Grocery List</h2>
    {groceries.map(i => <Grocery key={i.id} name={i.name}/>)}
  </article>
  );
};

export default GroceryList;
