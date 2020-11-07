import React, {Fragment} from "react";

export default class EntryTableRow extends React.Component {
    render() {
        return (<Fragment>
                <tr>{this.props.x}</tr>
                <tr>{this.props.y}</tr>
                <tr>{this.props.r}</tr>
                <tr>{this.props.result}</tr>
        </Fragment>)
    }
}