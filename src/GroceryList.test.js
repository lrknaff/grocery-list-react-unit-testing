import React from 'react'
import { shallow, mount } from 'enzyme'

// import Grocery from './Grocery'
import GroceryList from './GroceryList'

describe('GroceryList', () => {
  it('renders "Grocery List" in <h3> tags', () => {
    const wrapper = shallow(
      <GroceryList
        groceries={[
          { id: 1, name: "Bananas" }
        ]}
      />
    )

    expect(wrapper.contains("Grocery List")).toEqual(true)
  });

  it('shows all of the groceries', () => {
    const wrapper = mount(
      <GroceryList
        groceries={[
          { id: 1, name: "Bananas" },
          { id: 2, name: "Oranges" },
          { id: 3, name: "Apples" },
        ]}
      />
    )

    expect(wrapper.find('.Grocery').length).toEqual(3)
  });
})
