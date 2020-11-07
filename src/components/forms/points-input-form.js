import React, {Fragment} from 'react'
import TextField from "../inputs/text-field";
import RadioGroup from "../inputs/radio-group";
import request from "superagent";
import {connect} from "react-redux";
import {addEntry} from "../../actions";

class PointsInputForm extends React.Component{
    render(){
        return(
            <Fragment>
                <form id={"points-form"} onSubmit={this.submit}>
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
                            <button type={"submit"} className={"button"}>Check</button>
                            <button className={"button"}>Clear</button>
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

        if (x !== undefined && r !== undefined && y !== "") {
            var dispatch = this.props.dispatch;

            request
                .post('http://localhost:6203/api/entries')
                .withCredentials()
                .set('X-Requested-With', 'XMLHttpRequest')
                .send(JSON.stringify({x: x, y: y, r: r}))
                .type('json')
                .end(function(err, res){
                    if (res.ok) {
                        dispatch(addEntry(JSON.parse(res.text)));
                    }
                });
        }

    }
}

export default connect(null)(PointsInputForm);