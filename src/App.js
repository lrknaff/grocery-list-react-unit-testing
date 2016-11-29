import React, { Component } from 'react';
import './App.css';

import Grocery from './Grocery'
import GroceryList from './GroceryList'

class App extends Component {
  render() {
    return (
      <div>
        <GroceryList
          groceries={[]}
          onClear={this.onClearMock}
        />
        <Grocery
        name={'bananas'}
        starred={false}
        purchased={false}
        quantity={'17 bunches'}
        notes={'I like bananas'}
        onPurchase={this.onPurchaseMock}
        onStar={this.onStarMock}
        onDelete={this.onDeleteMock}
        />
      </div>
    );
  }
}

export default App;
