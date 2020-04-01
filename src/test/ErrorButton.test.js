import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import ErrorButton from '../components/ErrorButton'

Enzyme.configure({ adapter: new EnzymeAdapter })

test('renders without crashing', () => {
  const wrapper = shallow(<ErrorButton />)
  const errorButtonComponent = wrapper.find("[data-test='component-error-button']")
  expect(errorButtonComponent.length).toBe(1)
})