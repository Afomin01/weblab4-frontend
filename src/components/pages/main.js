import React from 'react'
import PointsInputForm from "../forms/PointsInputForm";
import Graph from "../graph";

export default class Main extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <PointsInputForm/>
                    <Graph/>
                </div>
            </div>
        )
    }
}