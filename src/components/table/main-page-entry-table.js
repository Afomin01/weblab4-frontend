import React, {Fragment} from "react";
import EntryTableRow from "./entry-table-row";

export default class MainPageEntryTable extends React.Component {
    render() {
        return (<Fragment>
                <table className={"result-table"}>
                    <thead>
                        <th>X</th>
                        <th>Y</th>
                        <th>R</th>
                        <th>Result</th>
                    </thead>
                    <tbody>
                    {
                        this.props.entries.map(function (item, i) {
                            return <EntryTableRow x={item.x} y={item.y} r={item.r} result={item.result}/>
                        })
                    }
                    </tbody>
                </table>
            </Fragment>
        )
    }
}