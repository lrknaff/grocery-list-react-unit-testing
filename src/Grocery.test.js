import React from 'react'
import { shallow, mount } from 'enzyme'

import Grocery from './Grocery'

describe('Grocery', () => {
  it('renders the name of the Grocery in <h3> tags', () => {
    const wrapper = shallow(<Grocery name="Bananas" />);
    const title = <h3>Bananas</h3>;

    expect(wrapper.contains(title)).toEqual(true)
  });

  it('has a class of .Grocery', () => {
    const wrapper = shallow(<Grocery name="Bananas" />);

    expect(wrapper.is('.Grocery')).toEqual(true)
  });

  it('should have a className of "starred" if is starred', () => {
    const wrapper = shallow(<Grocery name="Bananas" starred={true}/>);

    expect(wrapper.is('.starred')).toEqual(true)
  });

  it('should not have a className of "starred" if it is not starred', () => {
    const wrapper = shallow(<Grocery name="Bananas" starred={false}/>);

    expect(wrapper.is('.starred')).toEqual(false)
  });

  it('should have a className of "purchased" if it is purchased', () => {
    const wrapper = shallow(<Grocery name="Bananas" starred={false} purchased={true}/>)

    expect(wrapper.is('.purchased')).toEqual(true)
  });

  it('should not have a className of "purchased" if it is purchased', () => {
    const wrapper = shallow(<Grocery name="Bananas" starred={false} purchased={false}/>)

    expect(wrapper.is('.purchased')).toEqual(false)
  });

  it('should have a p.Grocery-quanitity element if a quantity is passed as a prop', () => {
    const wrapper = shallow(<Grocery name="Bananas" quantity={'17 bunches'}/>)

    expect(wrapper.find('.Grocery-quantity').length).toEqual(1)
  });

  it('should not have a p.Grocery-quantity element if a quantity is not passed as a prop', () => {
    const wrapper = shallow(<Grocery name="Bananas"/>)

    expect(wrapper.find('.Grocery-quantity').length).toEqual(0)
  });

  it('should have the text of 17 bunches', () => {
    const wrapper = shallow(<Grocery name="Bananas" quantity={'17 bunches'}/>)

    expect(wrapper.find('.Grocery-quantity').text()).toEqual('Quantity: 17 bunches')
  });

  it('should have a p.Grocery-notes element if notes are passed as a prop', () => {
    const wrapper = shallow(<Grocery name="Bananas" notes={"I love Bananas"}/>)

    expect(wrapper.find('.Grocery-notes').length).toEqual(1)
  });

  it('should not have a p.Grocery-notes element if notes is not passed as a prop', () => {
    const wrapper = shallow(<Grocery name="Bananas"/>)

    expect(wrapper.find('.Grocery-notes').length).toEqual(0)
  });

  it('should have the text of "I love Bananas"', () => {
    const wrapper = shallow(<Grocery name="Bananas" notes={'I love Bananas'}/>)

    expect(wrapper.find('.Grocery-notes').text()).toEqual('Notes: I love Bananas')
  });
})

describe('.Grocery-purchase button', () => {
  it('should have a text of "Purchase" if purchased is false', () => {
    const wrapper = shallow(<Grocery name="Bananas" purchased={undefined}/>)

    expect(wrapper.find('.Grocery-purchase').text()).toEqual('Purchase')
  });

  it('should have a text of "Unpurchase" if purchased is true', () => {
    const wrapper = shallow(<Grocery name="Bananas" purchased={true}/>)

    expect(wrapper.find('.Grocery-purchase').text()).toEqual('Unpurchase')
  });

  it('should call the onPurchase prop when clicked', () => {
    const onPurchaseMock = jest.fn()

    const wrapper = mount(
      <Grocery
        name="Bananas"
        purchased={true}
        onPurchase={onPurchaseMock}
      />
    )

    wrapper.find('.Grocery-purchase').simulate('click')

    expect(onPurchaseMock).toBeCalled()
  });
})


describe('.Grocery-starred button', () => {
  it('should have a text of "Star" if starred is false', () => {
    const wrapper = shallow(<Grocery name="Bananas" starred={undefined}/>)

    expect(wrapper.find('.Grocery-starred').text()).toEqual('Star')
  });

  it('should have a text of "Unstar" if starred is true', () => {
    const wrapper = shallow(<Grocery name="Bananas" starred={true}/>)

    expect(wrapper.find('.Grocery-starred').text()).toEqual('Unstar')
  });

  it('should call the onStar prop when clicked', () => {

    const onStarMock = jest.fn()

    const wrapper = mount(
      <Grocery
        name="Bananas"
        purchased={true}
        onStar={onStarMock}
      />
    )

    wrapper.find('.Grocery-starred').simulate('click')

    expect(onStarMock).toBeCalled()
  });
})

describe('.Grocery-remove button', () => {

  it('should call the onDelete prop when clicked', () => {

    const onDeleteMock = jest.fn()

    const wrapper = mount(
      <Grocery
        name="Bananas"
        purchased={true}
        onDelete={onDeleteMock}
      />
    )

    wrapper.find('.Grocery-remove').simulate('click')

    expect(onDeleteMock).toBeCalled()
  });
})
