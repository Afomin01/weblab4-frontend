import React, {Fragment} from 'react'
import TextField from "../inputs/text-field";
import RadioGroup from "../inputs/radio-group";
import request from "superagent";
import {connect} from "react-redux";
import {addEntry, clearEntries} from "../../actions/actions";
import Cookies from "js-cookie";
import history from "../../history";

class PointsInputForm extends React.Component{
    render(){
        return(
            <Fragment>
                <form id={"points-form"}>
                    <label className={"error-label"} id={"entry-form-error"}/>
                    <div>
                        <label className={"input-name"}>Select X value</label>
                        <RadioGroup name={"x"} start={-2} stop={2} step={0.5}/>
                    </div>
                    <div>
                        <label className={"input-name"}>Enter Y value</label>
                        <TextField type={"text"} name={"y"} id={"y"} label={"Y Value"}
                                   placeholder={"Enter y value"}/>
                    </div>
                    <div>
                        <label className={"input-name"}>Select R value</label>
                        <RadioGroup name={"r"} start={-2} stop={2} step={0.5}/>
                        <div className={"buttons-div"}>
                            <button type={"submit"} className={"button"} onClick={this.submit}>Check</button>
                            <button className={"button"} onClick={this.clear}>Clear</button>
                        </div>
                    </div>
                </form>
            </Fragment>
        )
    }

    submit = (e) => {
        e.preventDefault();

        if (document.querySelector('input[name="x"]:checked') != null) {
            var x = document.querySelector('input[name="x"]:checked').value;
        }
        if (document.querySelector('input[name="r"]:checked') != null) {
            var r = document.querySelector('input[name="r"]:checked').value;
        }
        var y = document.getElementById('y').value

        let error = document.getElementById("entry-form-error");
        error.innerHTML = ""

        if (x !== undefined && r !== undefined && y !== "") {
            let yValue = y.replace(/\s/g,'').replace(',','.');
            if((!isNaN(yValue)) && !(parseFloat(yValue) >= 5 || parseFloat(yValue) <= -5 )) {
                yValue = parseFloat(yValue).toFixed(7)
                var dispatch = this.props.dispatch;

                request
                    .post('http://localhost:6203/api/entries')
                    .withCredentials()
                    .set('X-Requested-With', 'XMLHttpRequest')
                    .send(JSON.stringify({x: x, y: yValue, r: r}))
                    .type('json')
                    .end(function (err, res) {
                        if (res.ok) {
                            dispatch(addEntry(JSON.parse(res.text)));
                        } else if (res.status === 401) {
                            Cookies.set('is-logged-in','false')
                            history.push("/welcome")
                        }
                    });
            }else error.innerHTML = "Y must be a number in range (-5;5)"
        }else error.innerHTML = "Please select X and enter Y value"

    }

    clear = (e) =>{
        e.preventDefault();
        var dispatch = this.props.dispatch;
        request
            .delete('http://localhost:6203/api/entries')
            .withCredentials()
            .set('X-Requested-With', 'XMLHttpRequest')
            .end(function (err, res) {
                if (res.ok) {
                    dispatch(clearEntries());
                } else if (res.status === 401) {
                    Cookies.set('is-logged-in','false')
                    history.push("/welcome")
                }
            });
    }
}

export default connect(null)(PointsInputForm);