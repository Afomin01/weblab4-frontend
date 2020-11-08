import React from 'react'
import request from "superagent";
import {addEntry} from "../../actions/actions";
import history from "../../history";
import Cookies from "js-cookie";

export default class UserModule extends React.Component{
    render(){
        return(
            <div id={"logout-div"}>
                <button type={"submit"} className={"button"} onClick={this.logOut}>Log out</button>
            </div>
        )
    }

    logOut(e){
        e.preventDefault()

        request
            .post('http://localhost:6203/api/authorization/logout')
            .withCredentials()
            .set('X-Requested-With', 'XMLHttpRequest')
            .end(function(err, res){
                Cookies.set('is-logged-in','false')
                history.push("/welcome")
            });
    }
}