import React from 'react'
import PointsInputForm from "../forms/PointsInputForm";
import Graph from "../graph";

export default class Main extends React.Component{
    render(){
        console.log(this.props);
        return(
            <div>
                <div>
                    <PointsInputForm {...this.props}/>
                    <Graph/>
                </div>
            </div>
        )
    }
}