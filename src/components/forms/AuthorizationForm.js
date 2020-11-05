import React from 'react'
import request from "superagent";


export default class AuthorizationForm extends React.Component {
    render(){
        return(
            <div className={"login-signup"}>
                <div className={"toggle-btns-div"}>
                    <div id={"toggle-btn-slider"} className={"toggle-btn-slider"}></div>
                    <button type={"button"} className={"toggle-btn"} onClick={this.slideToSignIn}>Sign In</button>
                    <button type={"button"} className={"toggle-btn"} onClick={this.slideToSignUp}>Sign Up</button>
                </div>
                <form id={"login-form"} className={"login-signup-form"} onSubmit={this.signInSubmit}>
                    <label className={"error-label"} id={"signin-error"}></label>
                    <div className={"text-group"}>
                        <input type={"text"} name={"login"} placeholder={"Enter login"} id={"login-form-login"} autoComplete={"off"}/>
                        <label htmlFor={"login-form-login"} className={"input-text-label"}>Login</label>
                    </div>
                    <div className={"text-group"}>
                        <input type={"password"} name={"password"} placeholder={"Enter login"} id={"login-form-password"} autoComplete={"off"}/>
                        <label htmlFor={"login-form-password"} className={"input-text-label"}>Password</label>
                    </div>
                    <button type={"submit"} className={"button"}>Sign In</button>
                </form>
                <form id={"signup-form"} className={"login-signup-form"} onSubmit={this.signUpSubmit}>
                    <label className={"error-label"} id={"signup-error"}></label>
                    <div className={"text-group"}>
                        <input type={"text"} name={"login"} placeholder={"Enter login"} id={"signup-form-login"} autoComplete={"off"}/>
                        <label htmlFor={"signup-form-login"} className={"input-text-label"}>Login</label>
                    </div>
                    <div className={"text-group"}>
                        <input type={"password"} name={"password"} placeholder={"Enter login"} id={"signup-form-password"} autoComplete={"off"}/>
                        <label htmlFor={"signup-form-password"} className={"input-text-label"}>Password</label>
                    </div>
                    <div className={"text-group"}>
                        <input type={"password"} name={"confirmPassword"} placeholder={"Enter login"} id={"confirm"} autoComplete={"off"}/>
                        <label htmlFor={"confirm"} className={"input-text-label"}>Confirm Password</label>
                    </div>
                    <button type={"submit"} className={"button"}>Sign Up</button>
                </form>
            </div>
        )
    }

    signInSubmit(e) {
        e.preventDefault();

        let error = document.getElementById("signin-error");

        var login = document.getElementById("login-form-login").value;
        var pass = document.getElementById("login-form-password").value;

        request
            .get('http://localhost:6203/api/authorization/signin')
            .auth(login, pass)//.set('X-Requested-With', 'XMLHttpRequest')
            .end(function(err, res){
                if (res.ok) {
                    //redirrect
                }else error.innerHTML = "Incorrect login or password"
            });
    }

    signUpSubmit(e) {
        e.preventDefault();

        let error = document.getElementById("signup-error");

        var login = document.getElementById("signup-form-login").value;
        var pass = document.getElementById("signup-form-password").value;
        var passConfirm = document.getElementById("confirm").value;

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
                                    //redirrect
                                }else error.innerHTML = res.body;
                            });
                    } else error.innerHTML = "Passwords are not equal"
                } else error.innerHTML = "Password must be at least 5 symbols long"
            } else error.innerHTML = "Login can contain only latin symbols and digits"
        }else error.innerHTML = "Login must be at least 5 symbols long"
    }

    slideToSignIn() {
        document.getElementById("login-form").style.left = "50px";
        document.getElementById("signup-form").style.left = "450px";
        document.getElementById("toggle-btn-slider").style.left = "0";
    }

    slideToSignUp() {
        document.getElementById("login-form").style.left = "-400px";
        document.getElementById("signup-form").style.left = "50px";
        document.getElementById("toggle-btn-slider").style.left = "110px";
    }
}