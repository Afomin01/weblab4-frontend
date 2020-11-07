import React from 'react'
import request from "superagent";
import TextField from "../inputs/text-field";
import LoginForm from "./sign-in-form";
import SignUpForm from "./sign-up-form";


export default class AuthorizationForm extends React.Component {
    render(){
        return(
            <div className={"login-signup"}>
                <div className={"toggle-btns-div"}>
                    <div id={"toggle-btn-slider"} className={"toggle-btn-slider"}/>
                    <button type={"button"} className={"toggle-btn"} onClick={this.slideToSignIn}>Sign In</button>
                    <button type={"button"} className={"toggle-btn"} onClick={this.slideToSignUp}>Sign Up</button>
                </div>
                <LoginForm/>
                <SignUpForm/>
            </div>
        )
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