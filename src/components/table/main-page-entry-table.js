import React from "react";
import EntryTableRow from "./entry-table-row";
import { connect } from "react-redux";

class MainPageEntryTable extends React.Component {
    render() {
        return (
                <table className={"result-table"}>
                    <thead>
                    <tr>
                        <th>X</th>
                        <th>Y</th>
                        <th>R</th>
                        <th>Result</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.entries.sort((a, b) => (b.id - a.id)).map(function (entry, i) {
                            return <EntryTableRow key={entry.id} entry={entry}/>
                        })
                    }
                    </tbody>
                </table>
        )
    }
}

const mapStateToProps = state => {
    return {
        entries: state.get('entries')
    }
}

export default connect(mapStateToProps)(MainPageEntryTable);