import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import CoffeeButton from '../components/CoffeeButton'

Enzyme.configure({ adapter: new EnzymeAdapter })

test('renders without crashing', () => {
  const wrapper = shallow(<CoffeeButton />)
  const coffeeButtonComponent = wrapper.find("[data-test='component-coffee-button']")
  expect(coffeeButtonComponent.length).toBe(1)
})