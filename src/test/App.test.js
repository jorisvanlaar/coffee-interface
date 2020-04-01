import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

Enzyme.configure({ adapter: new EnzymeAdapter })

let wrapper
beforeEach(() => { wrapper = shallow(<App />) })

test('renders app without crashing', () => {
  const appComponent = wrapper.find("[data-test='component-app']")
  expect(appComponent.length).toBe(1)
})

test('renders status without crashing', () => {
  const statusComponent = wrapper.find("[data-test='component-status']")
  expect(statusComponent.length).toBe(1)
})

test('initial state -> status displays "Ready for use" and interface is enabled', () => {
  const status = wrapper.state('message')
  expect(status).toBe("Ready for use")

  const disabled = wrapper.state('disabled')
  expect(disabled).toBe(false)

  const capoDisabled = wrapper.state('capoDisabled')
  expect(capoDisabled).toBe(false)

  const chocoAndWienerDisabled = wrapper.state('chocoAndWienerDisabled')
  expect(chocoAndWienerDisabled).toBe(false)
})

test('reset -> status displays "Ready for use" and interface is enabled', () => {
  wrapper.setState({
    message: 'doing something',
    disabled: true,
    capoDisabled: true,
    chocoAndWienerDisabled: true
  })

  wrapper.instance().setToReady()

  const status = wrapper.state('message')
  const disabled = wrapper.state('disabled')
  const capoDisabled = wrapper.state('capoDisabled')
  const chocoAndWienerDisabled = wrapper.state('chocoAndWienerDisabled')

  expect(status).toBe('Ready for use')
  expect(disabled).toBe(false)
  expect(capoDisabled).toBe(false)
  expect(chocoAndWienerDisabled).toBe(false)
})

test('coffee button clicked -> status displays "Making [drink name]" and interface is disabled', () => {
  wrapper.instance().makeAmericano()

  const status = wrapper.state('message')
  const disabled = wrapper.state('disabled')
  const capoDisabled = wrapper.state('capoDisabled')
  const chocoAndWienerDisabled = wrapper.state('chocoAndWienerDisabled')

  expect(status).toBe('Making Americano...')
  expect(disabled).toBe(true)
  expect(capoDisabled).toBe(true)
  expect(chocoAndWienerDisabled).toBe(true)
})

test('error button clicked -> error overlay is shown with corresponding error message, status displays "ERROR" and interface is disabled', () => {
  wrapper.instance().triggerError1()

  const status = wrapper.state('message')
  const disabled = wrapper.state('disabled')
  const capoDisabled = wrapper.state('capoDisabled')
  const chocoAndWienerDisabled = wrapper.state('chocoAndWienerDisabled')
  const showError = wrapper.state('showError')
  const errorDescription = wrapper.state('errorDescription')

  expect(status).toBe('ERROR')
  expect(disabled).toBe(true)
  expect(capoDisabled).toBe(true)
  expect(chocoAndWienerDisabled).toBe(true)
  expect(showError).toBe(true)
  expect(errorDescription).toBe('NO WATER PRESSURE')
})

test('sugar slider = 0 -> Cappuccino coffee button is disabled', async() => {
  await wrapper.instance().updateSugar(0)
  const capoDisabled = wrapper.state('capoDisabled')
  expect(capoDisabled).toBeTruthy()
})

test('milk slider = 0 -> Cappuccino coffee button is disabled', async () => {
  await wrapper.instance().updateMilk(0)
  const capoDisabled = wrapper.state('capoDisabled')
  expect(capoDisabled).toBeTruthy()
})

test('cacao slider = 0 -> Wiener Melange and Hot Chocolate coffee buttons are disabled', async () => {
  await wrapper.instance().updateCacao(0)
  const chocoAndWienerDisabled = wrapper.state('chocoAndWienerDisabled')
  expect(chocoAndWienerDisabled).toBeTruthy()
})
