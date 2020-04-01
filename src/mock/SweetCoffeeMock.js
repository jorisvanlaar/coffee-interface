class SweetCoffeeMachine {

	constructor()  {
		this.errorState = 0
	}

	/**
	 * Callback for retrieving ready messages, takes callback function as parameter.
	 */
	readyCallback(callback) {
		this._cbReady = callback
	}

	/*
	 * Sends a command to the coffee machine to start making a drink, which is simulated by a timeout of 2000ms
	 */
	makeAmericano() {
		setTimeout(() => {
			if (typeof this._cbReady === "function")  {
				this._cbReady()
			}
		}, 2000)
		return true
	}
	
	/*
	 * Sends a command to the coffee machine to start making a drink, which is simulated by a timeout of 2000ms
	 * sugar and milk are values between [0,100]
	 */
	makeCappuccino( sugar, milk ) {
		setTimeout(() => {
			if (typeof this._cbReady === "function")  {
				this._cbReady()
			}
		}, 2000)
		return true
	}
	
	/*
	 * Sends a command to the coffee machine to start making a drink, which is simulated by a timeout of 2000ms
	 * cacao is a value between [0,100]
	 */
	makeWienerMelange( cacoa ) {
		setTimeout(() => {
			if (typeof this._cbReady === "function")  {
				this._cbReady()
			}
		}, 2000)
		return true
	}
	
	/*
	 * Sends a command to the coffee machine to start making a drink, which is simulated by a timeout of 2000ms
	 * cacao is a value between [0,100]
	 */
	makeChoco( cacoa ) {
		setTimeout(() => {
			if (typeof this._cbReady === "function")  {
				this._cbReady()
			}
		}, 2000)
		return true
	}
	
	/*
	 * Sends a command to the coffee machine to start making a drink, which is simulated by a timeout of 2000ms
	 */
	makeBlackTea() {
		setTimeout(() => {
			if (typeof this._cbReady === "function")  {
				this._cbReady()
			}
		}, 2000)
		return true
	}
	
	/*
	 * Sends a command to the coffee machine to start making a drink, which is simulated by a timeout of 2000ms
	 */
	makeEarlGray() {
		setTimeout(() => {
			if (typeof this._cbReady === "function")  {
				this._cbReady()
			}
		}, 2000)
		return true
	}

	/**
	 * Callback for retrieving error messages, takes callback function as parameter.
	 */
	errorCallback(callback) {
		this._cbError = callback
	}

	/*
	For simulation purposes the error will be shown for 3000ms
	 */
	triggerError1() {
		setTimeout(() => {
			if (typeof this._cbError === "function")  {
				this._cbError()
			}
		}, 3000)
		return true
	}

	/*
For simulation purposes the error will be shown for 3000ms
 */
	triggerError2() {
		setTimeout(() => {
			if (typeof this._cbError === "function")  {
				this._cbError()
			}
		}, 3000)
		return true
	}

	/*
For simulation purposes the error will be shown for 3000ms
 */
	triggerError3() {
		setTimeout(() => {
			if (typeof this._cbError === "function")  {
				this._cbError()
			}
		}, 3000)
		return true
	}
}

export default SweetCoffeeMachine