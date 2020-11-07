import React, {Fragment} from 'react'
import PointsInputForm from "../forms/points-input-form";
import Graph from "../svg/graph";
import MainPageEntryTable from "../table/main-page-entry-table";

export default class Main extends React.Component{
    render(){
        return(
            <Fragment>
                <div id={"entry-form-graph"}>
                    <PointsInputForm/>
                    <Graph/>
                </div>
                <MainPageEntryTable entries={[]}/>
            </Fragment>
        )
    }
}