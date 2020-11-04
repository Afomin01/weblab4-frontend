import React from 'react'
import githubLogo from '../../assets/GitHub-Mark-Light-64px.png'; // Tell webpack this JS file uses this image

export default class Footer extends React.Component{
    render(){
        return(
            <div id={"footer"}>
                <div>
                    <div>© Artem Bakin and Dmitriy Kuperstein, 2020</div>
                    <div>
                        <a href="https://github.com/Afomin01/webLab2">
                            <img src={githubLogo} id={"gitHub-img"}/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
