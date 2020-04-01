import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import ErrorOverlay from '../components/ErrorOverlay'

Enzyme.configure({ adapter: new EnzymeAdapter })

test('renders without crashing', () => {
  const wrapper = shallow(<ErrorOverlay />)
  const errorOverlayComponent = wrapper.find("[data-test='component-error-overlay']")
  expect(errorOverlayComponent.length).toBe(1)
})