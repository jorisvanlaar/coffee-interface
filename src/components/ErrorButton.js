import React, { Component } from 'react'
import '../css/ErrorButton.css'

class ErrorButton extends Component {
    constructor(props) {
        super(props)
        this.onMyClick = this.onMyClick.bind(this)
    }

    onMyClick() {
        this.props.triggerError()
    }

    render() {
        const styles= {}
        this.props.disabled ? styles.backgroundColor = "grey" : styles.backgroundColor = "red"
        return (
            <button className="Button-error" data-test="component-error-button" style={styles} disabled={this.props.disabled} onClick={this.onMyClick}>
                {this.props.description}
            </button>
        )
    }
}

export default ErrorButton