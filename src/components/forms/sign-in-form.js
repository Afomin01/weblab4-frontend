import React from 'react'
import request from "superagent";
import TextField from "../inputs/text-field";
import history from '../../history';
import Cookies from 'js-cookie'

export default class SignInForm extends React.Component {
    render() {
        return (
            <form id={"login-form"} className={"login-signup-form"} onSubmit={this.submit}>
                <label className={"error-label"} id={"signin-error"}/>
                <TextField type={"text"} name={"login"} id={"login-form-login"} label={"Login"}
                           placeholder={"Enter login"}/>
                <TextField type={"password"} name={"password"} id={"login-form-password"} label={"Password"}
                           placeholder={"Enter password"}/>
                <button type={"submit"} className={"button"}>Sign In</button>
            </form>
        )
    }

    submit(e) {
        e.preventDefault();

        let error = document.getElementById("signin-error");
        error.innerHTML = ""

        var login = document.getElementById("login-form-login").value;
        var pass = document.getElementById("login-form-password").value;

        if(!(login==='' || pass==='')) {
            request
                .get('http://localhost:6203/api/authorization/signin')
                .withCredentials()
                .auth(login, pass)
                .set('X-Requested-With', 'XMLHttpRequest')
                .end(function (err, res) {
                    if (res.ok) {
                        Cookies.set('is-logged-in', 'true');
                        history.push("/main")
                    } else error.innerHTML = "Incorrect login or password"
                });
        }else error.innerHTML = "Please fill login and password fields"
    }
}