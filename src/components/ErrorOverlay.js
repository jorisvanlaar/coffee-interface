import React, { Component } from 'react'
import '../css/ErrorOverlay.css'

class ErrorOverlay extends Component {
    constructor (props) {
        super(props);
        this.getShow = this.getShow.bind(this);
    }

    getShow() {
        if (this.props.show) {
            return "ErrorOverlay ErrorOverlayShow";
        } else {
            return "ErrorOverlay ErrorOverlayHidden";
        }
    }

    render() {
        return (
            <div className={this.getShow()} data-test="component-error-overlay">
                <p>There is something wrong: <br/> {this.props.errorMessage} <br/> It won't be possible to prepare your drink :(</p>
            </div>);
    }
}

export default ErrorOverlay