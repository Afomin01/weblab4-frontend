import React, {Fragment} from 'react'
import PointsInputForm from "../forms/points-input-form";
import Graph from "../svg/graph";
import MainPageEntryTable from "../table/main-page-entry-table";
import request from "superagent";
import {setEntries} from "../../actions/actions";
import {connect} from "react-redux";
import history from "../../history";
import UserModule from "../general/user-logout";
import Cookies from "js-cookie";

class MainPage extends React.Component{
    componentDidMount() {
        var dispatch = this.props.dispatch;

        if(Cookies.get('is-logged-in') === 'false') history.push("/welcome")

        request
            .get('http://localhost:6203/api/entries')
            .withCredentials()
            .set('X-Requested-With', 'XMLHttpRequest')
            .end(function(err, res){
                if (res.ok) {
                    dispatch(setEntries(JSON.parse(res.text)))
                } else if (res.status === 401) {
                    Cookies.set('is-logged-in','false')
                    history.push("/welcome")
                }
            });
    }

    render(){
        return(
            <Fragment>
                <UserModule/>
                <div id={"entry-form-graph"}>
                    <Graph/>
                    <PointsInputForm/>
                </div>
                <MainPageEntryTable/>
            </Fragment>
        )
    }
}

export default connect(null)(MainPage);