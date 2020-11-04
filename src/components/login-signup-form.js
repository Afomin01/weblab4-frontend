import React from 'react'

export default class LoginSignUpForm extends React.Component {
    render(){
        return(
            <div className={"login-signup"}>
                <div className={"login-signup-buttons"}>
                    <div id={"toggle-btn-slider"}></div>
                    <button type={"button"} className={"toggle-btn"} onClick={this.slideToLogin}>Login</button>
                    <button type={"button"} className={"toggle-btn"} onClick={this.slideToSignup}>Sign Up</button>
                </div>
                <form id={"login-form"} className={"login-signup-form"}>
                    <label>Login:</label>
                    <input type={"text"} className={"input-field"} placeholder={"Enter login"}/>
                    <label>Password:</label>
                    <input type={"password"} className={"input-field"} placeholder={"Enter password"}/>
                    <button type={"submit"} className={"submit-btn"}>Submit</button>
                </form>
                <form id={"signup-form"} className={"login-signup-form"}>
                    <label>Login:</label>
                    <input type={"text"} className={"input-field"} placeholder={"Enter login"}/>
                    <label>Password:</label>
                    <input type={"password"} className={"input-field"} placeholder={"Enter password"}/>
                    <label>Confirm password:</label>
                    <input type={"password"} className={"input-field"} placeholder={"Conform password"}/>
                    <button type={"submit"} className={"submit-btn"}>Submit</button>
                </form>
            </div>
        )
    }

    slideToLogin() {
        document.getElementById("login-form").style.left = "50px";
        document.getElementById("signup-form").style.left = "450px";
        document.getElementById("toggle-btn-slider").style.left = "0";
    }

    slideToSignup() {
        document.getElementById("login-form").style.left = "-400px";
        document.getElementById("signup-form").style.left = "50px";
        document.getElementById("toggle-btn-slider").style.left = "110px";
    }
}