import React from 'react'
import { shallow, mount } from 'enzyme'

import GroceryList from './GroceryList'

describe('GroceryList', () => {
  it('renders the name of the Grocery in <h3> tags', () => {
    const wrapper = shallow(<Grocery name="Bananas" />);
    const title = <h3>Bananas</h3>;

    expect(wrapper.contains(title)).toEqual(true)
  });
})
