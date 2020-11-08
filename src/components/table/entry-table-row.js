import React, {Fragment} from "react";

export default class EntryTableRow extends React.Component {
    render() {
        return (
            <Fragment>
                <tr key={this.props.entry.id}>
                    <td>{this.props.entry.x}</td>
                    <td>{this.props.entry.y}</td>
                    <td>{this.props.entry.r}</td>
                    <td style={{ color: this.props.entry.result ? 'green' : 'red' }}>{this.props.entry.result ? "True" : "False"}</td>
                </tr>
            </Fragment>
        )
    }
}