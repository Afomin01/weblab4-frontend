import React from 'react'
import AuthorizationForm from "../forms/authorization-form";
import Cookies from "js-cookie";
import history from "../../history";

export default class WelcomePage extends React.Component{
    render(){
        if(Cookies.get('is-logged-in') === 'true') history.push("/main")

        return(
            <div>
                <AuthorizationForm />
            </div>
        )
    }
}