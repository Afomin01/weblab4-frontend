import React from 'react'
import RadioButton from "./radio-button";

export default class RadioGroup extends React.Component{
    render() {
        let buttons = [];
        for (let i = this.props.start; i <= this.props.stop; i += this.props.step) {
            buttons.push(<RadioButton key={i} name={this.props.name} value={i}/>);
        }

        return (
            <div className={"radio-div"}>{buttons}</div>
        )
    }
}