import React, {Fragment} from "react";
import {connect} from "react-redux";
import request from "superagent";
import {addEntry} from "../../actions/actions";
import Cookies from "js-cookie";
import history from "../../history";
import EntryTableRow from "../table/entry-table-row";

class Graph extends React.Component{
    constructor(props) {
        super(props);

        let defaultR = 2;
        let dot = 35 * defaultR;
        this.squareDot = 175 - dot;
        this.circleDot = 175 + dot;
        this.circleR = 35 * defaultR;
        this.triDot = this.circleR / 2;
    }

    componentDidMount() {
        this.graph = document.getElementById('graph');
        this.pt = this.graph.createSVGPoint();
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        let dot = 35 * nextProps.r;
        this.squareDot = 175 - dot;
        this.circleDot = 175 + dot;
        this.circleR = 35 * nextProps.r;
        this.triDot = this.circleR / 2;
    }

    render(){
        var entries = this.props.entries;
        var r = this.props.r
        return (
            <Fragment>
                <svg viewBox={"-35 -35 420 420"} id={"graph"}
                     onContextMenu={this.suppressContextMenu} onClick={this.submit}>

                    <path d={
                        `M175 175 175 ${this.circleDot} A${this.circleR} ${this.circleR} 0 0 0 ${this.circleDot} 175Z`
                    } className={"figure-shape"}/>

                    <polygon points={
                        `175,175 175,${this.squareDot} ${this.squareDot},${this.squareDot} ${this.squareDot},175`
                    } className={"figure-shape"}/>

                    <polygon points={
                        `175,175 175,${175 + this.triDot} ${175 - this.triDot},175`
                    } className={"figure-shape"}/>

                    <line x1="171" y1="0" x2="179" y2="0" className="figure-axis-dash"/>
                    <line x1="171" y1="35" x2="179" y2="35" className="figure-axis-dash"/>
                    <line x1="171" y1="70" x2="179" y2="70" className="figure-axis-dash"/>
                    <line x1="171" y1="105" x2="179" y2="105" className="figure-axis-dash"/>
                    <line x1="171" y1="140" x2="179" y2="140" className="figure-axis-dash"/>
                    <line x1="171" y1="210" x2="179" y2="210" className="figure-axis-dash"/>
                    <line x1="171" y1="245" x2="179" y2="245" className="figure-axis-dash"/>
                    <line x1="171" y1="280" x2="179" y2="280" className="figure-axis-dash"/>
                    <line x1="171" y1="315" x2="179" y2="315" className="figure-axis-dash"/>
                    <line x1="171" y1="350" x2="179" y2="350" className="figure-axis-dash"/>

                    <polygon points="385,175 370,170 370,180" className="figure-axis-arrow"/>
                    <polygon points="175,-35 180,-20 170,-20" className="figure-axis-arrow"/>

                    <line x1="-35" y1="175" x2="385" y2="175" className="figure-axis"/>
                    <line x1="175" y1="385" x2="175" y2="-35" className="figure-axis"/>

                    <line y1="171" x1="0" y2="179" x2="0" className="figure-axis-dash"/>
                    <line y1="171" x1="35" y2="179" x2="35" className="figure-axis-dash"/>
                    <line y1="171" x1="70" y2="179" x2="70" className="figure-axis-dash"/>
                    <line y1="171" x1="105" y2="179" x2="105" className="figure-axis-dash"/>
                    <line y1="171" x1="140" y2="179" x2="140" className="figure-axis-dash"/>
                    <line y1="171" x1="210" y2="179" x2="210" className="figure-axis-dash"/>
                    <line y1="171" x1="245" y2="179" x2="245" className="figure-axis-dash"/>
                    <line y1="171" x1="280" y2="179" x2="280" className="figure-axis-dash"/>
                    <line y1="171" x1="315" y2="179" x2="315" className="figure-axis-dash"/>
                    <line y1="171" x1="350" y2="179" x2="350" className="figure-axis-dash"/>

                    <text x="182" y="-24" className="figure-axis-text" >y</text>
                    <text x="370" y="167" className="figure-axis-text" >x</text>

                    <text x="185" y="355" className="figure-axis-text">-5</text>
                    <text x="185" y="320" className="figure-axis-text">-4</text>
                    <text x="185" y="285" className="figure-axis-text">-3</text>
                    <text x="185" y="250" className="figure-axis-text">-2</text>
                    <text x="185" y="215" className="figure-axis-text">-1</text>
                    <text x="185" y="145" className="figure-axis-text">1</text>
                    <text x="185" y="110" className="figure-axis-text">2</text>
                    <text x="185" y="75" className="figure-axis-text">3</text>
                    <text x="185" y="40" className="figure-axis-text">4</text>
                    <text x="185" y="5" className="figure-axis-text">5</text>

                    <text x="0" y="167" textAnchor={"middle"} className="figure-axis-text">-5</text>
                    <text x="35" y="167" textAnchor={"middle"} className="figure-axis-text">-4</text>
                    <text x="70" y="167" textAnchor={"middle"} className="figure-axis-text">-3</text>
                    <text x="105" y="167" textAnchor={"middle"} className="figure-axis-text">-2</text>
                    <text x="140" y="167" textAnchor={"middle"} className="figure-axis-text">-1</text>
                    <text x="210" y="167" textAnchor={"middle"} className="figure-axis-text">1</text>
                    <text x="245" y="167" textAnchor={"middle"} className="figure-axis-text">2</text>
                    <text x="280" y="167" textAnchor={"middle"} className="figure-axis-text">3</text>
                    <text x="315" y="167" textAnchor={"middle"} className="figure-axis-text">4</text>
                    <text x="350" y="167" textAnchor={"middle"} className="figure-axis-text">5</text>

                    {

                        entries.map(function (entry, i) {
                            let result;
                            let x=entry.x, y=entry.y
                            if(r>0) {
                                if (x <= 0 && y >= 0) {
                                    result = y <= r && x >= -r;
                                } else if (x <= 0 && y <= 0) {
                                    result = -y <= x + r/2;
                                } else if (x >= 0 && y <= 0) {
                                    result = x * x + y * y <= r * r;
                                } else if (y > 0 && x > 0) {
                                    result = false;
                                } else result = false;
                            }else if(r<0){
                                if (x <= 0 && y >= 0) {
                                    result = x * x + y * y <= r * r;
                                } else if (x >= 0 && y >= 0) {
                                    result = x<=-y+(-r/2);
                                } else if (x >= 0 && y <= 0) {
                                    result = x <= -r && y >= r;
                                } else if (y < 0 && x < 0) {
                                    result = false;
                                } else result = false;
                            }else{
                                result = x==0 && y==0;
                            }

                            return <circle cx={35*entry.x+175} cy={-35*entry.y+175} r={3} fill={ result ? '#45b745' : 'crimson' }/>
                        })

                    }

                </svg>
            </Fragment>
        )
    }

    suppressContextMenu = (e) => {
        e.preventDefault();
    }

    submit = (e) => {
        let pt = this.graph.createSVGPoint();
        let r = this.props.r;
        var dispatch = this.props.dispatch;
        pt.x = e.clientX;
        pt.y = e.clientY;
        pt = pt.matrixTransform(this.graph.getScreenCTM().inverse());

        let x = (pt.x-175)/35
        let y = (pt.y-175)/-35

        x = x.toFixed(5);
        y = y.toFixed(5)

        request
            .post('http://localhost:6203/api/entries')
            .withCredentials()
            .set('X-Requested-With', 'XMLHttpRequest')
            .send(JSON.stringify({x: x, y: y, r: r}))
            .type('json')
            .end(function (err, res) {
                if (res.ok) {
                    dispatch(addEntry(JSON.parse(res.text)));
                } else if (res.status === 401) {
                    Cookies.set('is-logged-in','false')
                    history.push("/welcome")
                }
            });
    }
}

const mapStateToProps = state => {
    return {
        r: state.get('r'),
        entries: state.get('entries')
    }
}

export default connect(mapStateToProps)(Graph);