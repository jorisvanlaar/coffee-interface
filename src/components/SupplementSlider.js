import React, {Component} from 'react'
import '../css/SupplementSlider.css'
import {Slider} from 'antd'
import 'antd/dist/antd.css'

class SupplementSlider extends Component {

    render() {
        return(
            <div className="Slider" data-test="component-supplement-slider">
                {this.props.supplement}
                <Slider
                    defaultValue={this.props.supplementValue}
                    disabled={this.props.disabled}
                    min={0}
                    max={100}
                    step={5}
                    onChange={this.props.updateSupplement}
                />
            </div>
        )
    }
}

export default SupplementSlider