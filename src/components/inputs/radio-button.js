import React from 'react'

export default class RadioButton extends React.Component{
    render() {
        return (
            <label>
                <input type={"radio"} name={this.props.name} value={this.props.value}/>
                <span className={"radio-design"}/>
                <span className={"radio-text"}>{this.props.value}</span>
            </label>
        )
    }
}