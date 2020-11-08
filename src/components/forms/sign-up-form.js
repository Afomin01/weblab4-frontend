import React from 'react'
import request from "superagent";
import TextField from "../inputs/text-field";
import {Redirect} from "react-router-dom";
import history from "../../history";

export default class SignUpForm extends React.Component {
    render() {
        return (
            <form id={"signup-form"} className={"login-signup-form"} onSubmit={this.submit}>
                <label className={"error-label"} id={"signup-error"}/>
                <TextField type={"text"} name={"login"} id={"signup-form-login"} label={"Login"}
                           placeholder={"Enter login"}/>
                <TextField type={"password"} name={"password"} id={"signup-form-password"} label={"Password"}
                           placeholder={"Enter password"}/>
                <TextField type={"password"} name={"confirmPassword"} id={"confirm"} label={"Confirm Password"}
                           placeholder={"Confirm Password"}/>
                <button type={"submit"} className={"button"}>Sign Up</button>
            </form>
        )
    }

    submit(e) {
        e.preventDefault();

        let error = document.getElementById("signup-error");
        error.innerHTML = ""

        var login = document.getElementById("signup-form-login").value;
        var pass = document.getElementById("signup-form-password").value;
        var passConfirm = document.getElementById("confirm").value;

        var slideBtn = document.getElementById("slide-sign-in-btn");

        if(login.length >=5) {
            if (login.match(/[^a-z0-9]/ig) === null) {
                if (pass.length >= 5) {
                    if (pass === passConfirm) {
                        request
                            .post('http://localhost:6203/api/authorization/signup')
                            .send(JSON.stringify({username: login, password: pass}))
                            .type('json')
                            .end(function(err, res){
                                if (res.ok) {
                                    slideBtn.click()
                                }else error.innerHTML = res.body;
                            });
                    } else error.innerHTML = "Passwords are not equal"
                } else error.innerHTML = "Password must be at least 5 symbols long"
            } else error.innerHTML = "Login can contain only latin symbols and digits"
        }else error.innerHTML = "Login must be at least 5 symbols long"
    }
}