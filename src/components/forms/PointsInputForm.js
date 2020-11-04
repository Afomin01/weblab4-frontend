import React from 'react'

export default class NotFound extends React.Component{
    render(){
        return(
            <div>
                <form id={"points-form"}>
                    <div>
                        <label className={"input-name"}>Select X value</label>
                        <div className={"radio-div"}>
                            <label>
                                <input type={"radio"} name={"x"} value={-2}/>
                                <span className={"radio-design"}></span>
                                <span className={"radio-text"}>-2</span>
                            </label>
                            <label>
                                <input type={"radio"} name={"x"} value={-1.5}/>
                                <span className={"radio-design"}></span>
                                <span className={"radio-text"}>-1.5</span>
                            </label>
                            <label>
                                <input type={"radio"} name={"x"} value={-1}/>
                                <span className={"radio-design"}></span>
                                <span className={"radio-text"}>-1</span>
                            </label>
                            <label>
                                <input type={"radio"} name={"x"} value={-0.5}/>
                                <span className={"radio-design"}></span>
                                <span className={"radio-text"}>-0.5</span>
                            </label>
                            <label>
                                <input type={"radio"} name={"x"} value={0}/>
                                <span className={"radio-design"}></span>
                                <span className={"radio-text"}>0</span>
                            </label>
                            <label>
                                <input type={"radio"} name={"x"} value={0.5}/>
                                <span className={"radio-design"}></span>
                                <span className={"radio-text"}>0.5</span>
                            </label>
                            <label>
                                <input type={"radio"} name={"x"} value={1}/>
                                <span className={"radio-design"}></span>
                                <span className={"radio-text"}>1</span>
                            </label>
                            <label>
                                <input type={"radio"} name={"x"} value={1.5}/>
                                <span className={"radio-design"}></span>
                                <span className={"radio-text"}>1.5</span>
                            </label>
                            <label>
                                <input type={"radio"} name={"x"} value={2}/>
                                <span className={"radio-design"}></span>
                                <span className={"radio-text"}>2</span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <label className={"input-name"}>Enter Y value</label>
                        <div  className={"text-group"}>
                            <input type={"text"} name={"y"} placeholder={"Enter y value"} id={"y"} autoComplete={"off"}/>
                            <label for={"y"} className={"input-text-label"}>Y Value</label>
                        </div>
                    </div>
                    <div>
                        <label className={"input-name"}>Select R value</label>
                        <div className={"radio-div"}>
                            <label>
                                <input type={"radio"} name={"r"} value={-2}/>
                                <span className={"radio-design"}></span>
                                <span className={"radio-text"}>-2</span>
                            </label>
                            <label>
                                <input type={"radio"} name={"r"} value={-1.5}/>
                                <span className={"radio-design"}></span>
                                <span className={"radio-text"}>-1.5</span>
                            </label>
                            <label>
                                <input type={"radio"} name={"r"} value={-1}/>
                                <span className={"radio-design"}></span>
                                <span className={"radio-text"}>-1</span>
                            </label>
                            <label>
                                <input type={"radio"} name={"r"} value={-0.5}/>
                                <span className={"radio-design"}></span>
                                <span className={"radio-text"}>-0.5</span>
                            </label>
                            <label>
                                <input type={"radio"} name={"r"} value={0}/>
                                <span className={"radio-design"}></span>
                                <span className={"radio-text"}>0</span>
                            </label>
                            <label>
                                <input type={"radio"} name={"r"} value={0.5}/>
                                <span className={"radio-design"}></span>
                                <span className={"radio-text"}>0.5</span>
                            </label>
                            <label>
                                <input type={"radio"} name={"r"} value={1}/>
                                <span className={"radio-design"}></span>
                                <span className={"radio-text"}>2</span>1
                            </label>
                            <label>
                                <input type={"radio"} name={"r"} value={1.5}/>
                                <span className={"radio-design"}></span>
                                <span className={"radio-text"}>1.5</span>
                            </label>
                            <label>
                                <input type={"radio"} name={"r"} value={2}/>
                                <span className={"radio-design"}></span>
                                <span className={"radio-text"}>2</span>
                            </label>
                        </div>
                        <div className={"buttons-div"}>
                            <button className={"button"}>Check</button>
                            <button className={"button"}>Clear</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}