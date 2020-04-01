import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import SupplementSlider from '../components/SupplementSlider'

Enzyme.configure({ adapter: new EnzymeAdapter })

test('renders without crashing', () => {
  const wrapper = shallow(<SupplementSlider />)
  const sliderComponent = wrapper.find("[data-test='component-supplement-slider']")
  expect(sliderComponent.length).toBe(1)
})

