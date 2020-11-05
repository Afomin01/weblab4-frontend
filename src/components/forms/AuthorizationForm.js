import React from 'react'

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
                    <div className={"text-group"}>
                        <input type={"text"} name={"login"} placeholder={"Enter login"} id={"login-form-login"} autoComplete={"off"}/>
                        <label htmlFor={"login"} className={"input-text-label"}>Login</label>
                    </div>
                    <div className={"text-group"}>
                        <input type={"password"} name={"password"} placeholder={"Enter login"} id={"login-form-password"} autoComplete={"off"}/>
                        <label htmlFor={"password"} className={"input-text-label"}>Password</label>
                    </div>
                    <button type={"submit"} className={"button"}>Sign Up</button>
                </form>
                <form id={"signup-form"} className={"login-signup-form"}>
                    <div className={"text-group"}>
                        <input type={"text"} name={"login"} placeholder={"Enter login"} id={"login"} autoComplete={"off"}/>
                        <label htmlFor={"login"} className={"input-text-label"}>Login</label>
                    </div>
                    <div className={"text-group"}>
                        <input type={"password"} name={"password"} placeholder={"Enter login"} id={"password"} autoComplete={"off"}/>
                        <label htmlFor={"password"} className={"input-text-label"}>Password</label>
                    </div>
                    <div className={"text-group"}>
                        <input type={"password"} name={"confirmPassword"} placeholder={"Enter login"} id={"confirm"} autoComplete={"off"}/>
                        <label htmlFor={"confirm"} className={"input-text-label"}>Confirm Password</label>
                    </div>
                    <button type={"submit"} className={"button"}>Sign In</button>
                </form>
            </div>
        )
    }

    signInSubmit(e) {
        e.preventDefault();

        var login = document.getElementById("login-form-login").value;
        var pass = document.getElementById("login-form-password").value;
        var basicAuth = `${login}:${pass}`;

        fetch("http://localhost:6203/login", {
            method: "GET",
            credentials: "include",
            headers: {
                Authorization: `Basic ${btoa(basicAuth)}`
            }
        }).then(responce => {

        });
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