import React, { Component } from 'react';
import './App.css';

import Grocery from './Grocery'

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
