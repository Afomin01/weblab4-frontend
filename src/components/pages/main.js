import React, {Fragment} from 'react'
import PointsInputForm from "../forms/points-input-form";
import Graph from "../svg/graph";
import MainPageEntryTable from "../table/main-page-entry-table";
import request from "superagent";
import {setEntries} from "../../actions/actions";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import history from "../../history";

class Main extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        var dispatch = this.props.dispatch;

        request
            .get('http://localhost:6203/api/entries')
            .withCredentials()
            .set('X-Requested-With', 'XMLHttpRequest')
            .end(function(err, res){
                if (res.ok) {
                    dispatch(setEntries(JSON.parse(res.text)))
                } else if (res.status === 401) {
                    history.push("/welcome")
                }//reload page???
            });
    }

    render(){
        return(
            <Fragment>
                <div id={"entry-form-graph"}>
                    <PointsInputForm/>
                    <Graph/>
                </div>
                <MainPageEntryTable/>
            </Fragment>
        )
    }
}

export default connect(null)(Main);