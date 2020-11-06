import React from 'react'

export default class TextField extends React.Component{
    render(){
        return(
            <div className={"text-group"}>
                <input type={this.props.type} name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} autoComplete={"off"}/>
                <label htmlFor={this.props.id} className={"input-text-label"}>{this.props.label}</label>
            </div>
        )
    }
}