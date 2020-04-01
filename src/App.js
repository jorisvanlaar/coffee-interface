import React, {Component} from 'react'
import './css/App.css'
import CoffeeButton from './components/CoffeeButton'
import ErrorButton from './components/ErrorButton'
import SupplementSlider from './components/SupplementSlider'
import SweetCoffeeMachine from './mock/SweetCoffeeMock'
import ErrorOverlay from './components/ErrorOverlay'

class App extends Component {

    constructor(props) {
        super(props)

        this.sweetCoffeeMachine = new SweetCoffeeMachine()
        this.setToReady = this.setToReady.bind(this)
        this.sweetCoffeeMachine.readyCallback(this.setToReady)
        this.sweetCoffeeMachine.errorCallback(this.setToReady)

        this.makeAmericano = this.makeAmericano.bind(this)
        this.makeCappuccino = this.makeCappuccino.bind(this)
        this.makeWienerMelange = this.makeWienerMelange.bind(this)
        this.makeChoco = this.makeChoco.bind(this)
        this.makeBlackTea = this.makeBlackTea.bind(this)
        this.makeEarlGray = this.makeEarlGray.bind(this)

        this.updateSugar = this.updateSugar.bind(this)
        this.updateMilk = this.updateMilk.bind(this)
        this.updateCacao = this.updateCacao.bind(this)

        this.triggerError1 = this.triggerError1.bind(this)
        this.triggerError2 = this.triggerError2.bind(this)
        this.triggerError3 = this.triggerError3.bind(this)

        this.state = {
            message: "Ready for use",
            disabled: false,
            capoDisabled: false,
            chocoAndWienerDisabled: false,
            sugarValue: 80,
            milkValue: 50,
            cacoaValue: 20,
            showError: false
        }
    }

    setToReady() {
        const capoDisabled = this.state.sugarValue === 0 || this.state.milkValue === 0
        const chocoAndWienerDisabled = this.state.cacoaValue === 0
        this.setState({
            message: "Ready for use",
            disabled: false,
            capoDisabled: capoDisabled,
            chocoAndWienerDisabled: chocoAndWienerDisabled,
            showError: false,
            errorDescription: null
        })
        this.sweetCoffeeMachine.errorState = 0
        this.forceUpdate()
    }

    makeAmericano() {
        this.setState({ message: "Making Americano...", disabled: true, capoDisabled: true, chocoAndWienerDisabled: true })
        this.sweetCoffeeMachine.makeAmericano()
    }

    makeCappuccino() {
        this.setState({ message: "Making Cappuccino...", disabled: true, capoDisabled: true, chocoAndWienerDisabled: true })
        this.sweetCoffeeMachine.makeCappuccino(this.state.sugarValue, this.state.milkValue)
    }

    makeWienerMelange() {
        this.setState({ message: "Making Wiener Melange...", disabled: true, capoDisabled: true, chocoAndWienerDisabled: true })
        this.sweetCoffeeMachine.makeWienerMelange(this.state.cacoaValue)
    }

    makeChoco() {
        this.setState({ message: "Making Hot Chocolate...", disabled: true, capoDisabled: true, chocoAndWienerDisabled: true })
        this.sweetCoffeeMachine.makeChoco(this.state.cacoaValue)
    }

    makeBlackTea() {
        this.setState({ message: "Making Black Tea...", disabled: true, capoDisabled: true, chocoAndWienerDisabled: true })
        this.sweetCoffeeMachine.makeBlackTea()
    }

    makeEarlGray() {
        this.setState({ message: "Making Earl Grey...", disabled: true, capoDisabled: true, chocoAndWienerDisabled: true })
        this.sweetCoffeeMachine.makeEarlGray()
    }

    updateSugar = async value => {
        await this.setState({sugarValue: value})
        const capoDisabled = this.state.sugarValue === 0 || this.state.milkValue === 0
        this.setState({capoDisabled: capoDisabled})
    }

    updateMilk = async value => {
        await this.setState({milkValue: value})
        const capoDisabled = this.state.milkValue === 0 || this.state.sugarValue === 0
        this.setState({capoDisabled: capoDisabled})
    }

    updateCacao = async value => {
        await this.setState({cacoaValue: value})
        const chocoAndWienerDisabled = this.state.cacoaValue === 0
        this.setState({chocoAndWienerDisabled: chocoAndWienerDisabled})
    }

    triggerError1() {
        this.setState({message: "ERROR", disabled: true, capoDisabled: true, chocoAndWienerDisabled: true, showError: true, errorDescription: "NO WATER PRESSURE" })
        this.sweetCoffeeMachine.errorState = 1
        this.sweetCoffeeMachine.triggerError1()
    }

    triggerError2() {
        this.setState({message: "ERROR", disabled: true, capoDisabled: true, chocoAndWienerDisabled: true, showError: true, errorDescription: "MACHINE IS BROKEN" })
        this.sweetCoffeeMachine.errorState = 2
        this.sweetCoffeeMachine.triggerError2()
    }

    triggerError3() {
        this.setState({message: "ERROR", disabled: true, capoDisabled: true, chocoAndWienerDisabled: true, showError: true, errorDescription: "HEATER IS BROKEN" })
        this.sweetCoffeeMachine.errorState = 3
        this.sweetCoffeeMachine.triggerError3()
    }

    render() {
        return (
            <div className="Wrapper">
                <ErrorOverlay show={this.state.showError} errorMessage={this.state.errorDescription} />
                <div className="App" data-test="component-app">
                    <table>
                        <tbody>
                        <tr>
                            <td><ErrorButton description="1: No water" disabled={this.state.disabled} triggerError={this.triggerError1}/></td>
                            <td><ErrorButton description="2: Internal status error" disabled={this.state.disabled} triggerError={this.triggerError2}/></td>
                            <td><ErrorButton description="3: Temperature too low" disabled={this.state.disabled} triggerError={this.triggerError3}/></td>
                        </tr>
                        <tr>
                            <td><CoffeeButton taste="Americano" disabled={this.state.disabled} makeCoffee={this.makeAmericano}/></td>
                            <td><CoffeeButton taste="Cappuccino" disabled={this.state.capoDisabled} makeCoffee={this.makeCappuccino}/></td>
                            <td><CoffeeButton taste="Wiener Melange" disabled={this.state.chocoAndWienerDisabled} makeCoffee={this.makeWienerMelange}/></td>
                        </tr>
                        <tr>
                            <td><CoffeeButton taste="Hot Chocolate" disabled={this.state.chocoAndWienerDisabled} makeCoffee={this.makeChoco}/></td>
                            <td><CoffeeButton taste="Black Tea" disabled={this.state.disabled} makeCoffee={this.makeBlackTea}/></td>
                            <td><CoffeeButton taste="Earl Grey" disabled={this.state.disabled} makeCoffee={this.makeEarlGray}/></td>
                        </tr>
                        <tr>
                            <td><SupplementSlider supplement="Sugar" disabled={this.state.disabled} supplementValue={this.state.sugarValue} updateSupplement={this.updateSugar}/></td>
                            <td><SupplementSlider supplement="Milk" disabled={this.state.disabled} supplementValue={this.state.milkValue} updateSupplement={this.updateMilk}/></td>
                            <td><SupplementSlider supplement="Cacoa" disabled={this.state.disabled} supplementValue={this.state.cacoaValue} updateSupplement={this.updateCacao}/></td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="Status" data-test="component-status">
                        {this.state.message}
                    </div>
                </div>
            </div>
        )
    }
}

export default App

