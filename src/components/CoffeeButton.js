import React, {Component} from 'react'
import '../css/CoffeeButton.css'

class CoffeeButton extends Component {
    constructor(props) {
        super(props)
        this.onMyClick = this.onMyClick.bind(this)
    }

    onMyClick() {
        this.props.makeCoffee()
    }

    render() {
        const styles= {}
        this.props.disabled ? styles.backgroundColor = "grey" : styles.backgroundColor = "steelblue"
        return (
            <button className="Button-coffee" data-test="component-coffee-button" style={styles} disabled={this.props.disabled} onClick={this.onMyClick}>
                {this.props.taste}
            </button>
        )
    }
}

export default CoffeeButton