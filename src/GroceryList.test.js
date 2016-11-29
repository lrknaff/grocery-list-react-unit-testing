import React from 'react'
import { shallow, mount } from 'enzyme'

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

  it('shows zero groceries if there are no groceries', () => {
    const wrapper = mount(
      <GroceryList
        groceries={[]}
      />
    )

    expect(wrapper.find('.Grocery').length).toEqual(0)
  });

  it('should enable the clear groceries button if there are groceries on the list', () => {
    const wrapper = mount(
      <GroceryList
        groceries={[
          { id: 1, name: "Bananas" },
          { id: 2, name: "Oranges" },
        ]}
      />
    )
      expect(wrapper.find('.Grocery-clear-list').prop('disabled')).toBe(false)
  });

  it('should disable the clear groceries button if there are groceries on the list', () => {
    const wrapper = mount(
      <GroceryList
        groceries={[]}
      />
    )
      expect(wrapper.find('.Grocery-clear-list').prop('disabled')).toBe(true)
  });

  it('should render a clear button', () => {
    const wrapper = shallow(
      <GroceryList
        groceries={[
          { id: 1, name: "Bananas" }
        ]}
      />
    )

    expect(wrapper.contains("Clear Groceries")).toEqual(true)
  });

  it('should call the onClear prop when clicked', () => {

    const onClearMock = jest.fn()

    const wrapper = mount(
      <GroceryList
        groceries={[
          { id: 1, name: "Bananas" },
          { id: 2, name: "Oranges" },
        ]}
        onClear={onClearMock}
      />
    )

    wrapper.find('.Grocery-clear-list').simulate('click')

    expect(onClearMock).toBeCalled()
  });
})
