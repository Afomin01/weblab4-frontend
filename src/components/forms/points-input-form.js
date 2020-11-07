import React, {Fragment} from 'react'
import TextField from "../inputs/text-field";
import RadioGroup from "../inputs/radio-group";

export default class PointsInputForm extends React.Component{
    render(){
        return(
            <Fragment>
                <form id={"points-form"}>
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
                            <button className={"button"}>Check</button>
                            <button className={"button"}>Clear</button>
                        </div>
                    </div>
                </form>
            </Fragment>
        )
    }
}