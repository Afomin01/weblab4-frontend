import React, {Fragment} from "react";

export default class Graph extends React.Component{
    constructor(props) {
        super(props);

        this.circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        this.circle.setAttribute('class', 'generated-circle')
        this.circle.setAttribute('r', "4");
    }

    componentDidMount() {
        this.graph = document.getElementById('graph');
        this.pt = this.graph.createSVGPoint();
    }

    render(){
        return (
            <Fragment>
                <svg height={"600"} width={"600"} viewBox={"-35 -35 420 420"} id={"graph"}
                     onMouseMove={this.placeCirce} onMouseLeave={this.hideCircle}
                     onContextMenu={this.suppressContextMenu}>
                    <path d={"M175 175 175 315 A140 140 0 0 0 315 175Z"} className={"figure-shape"}/>
                    <polygon points={"175,175 175,35 35,35 35,175"} className={"figure-shape"}/>
                    <polygon points={"175,175 175,245 105,175"} className={"figure-shape"}/>

                    <line x1={"0"} y1={"175"} x2={"345"} y2={"175"} className={"figure-axis"}/>
                    <line x1={"175"} y1={"350"} x2={"175"} y2={"5"} className={"figure-axis"}/>

                    <polygon points={"350,175 335,170 335,180"} className={"figure-axis-arrow"}/>
                    <polygon points={"175,0 180,15 170,15"} className={"figure-axis-arrow"}/>

                    <text x={"182"} y={"11"} className={"figure-axis-text"}>y</text>
                    <text x={"335"} y={"167"} className={"figure-axis-text"}>x</text>

                    <line x1={"171"} y1={"35"} x2={"179"} y2={"35"} className={"figure-axis-dash"}/>
                    <line x1={"171"} y1={"105"} x2={"179"} y2={"105"} className={"figure-axis-dash"}/>
                    <line x1={"171"} y1={"245"} x2={"179"} y2={"245"} className={"figure-axis-dash"}/>
                    <line x1={"171"} y1={"315"} x2={"179"} y2={"315"} className={"figure-axis-dash"}/>

                    <line y1={"171"} x1={"35"} y2={"179"} x2={"35"} className={"figure-axis-dash"}/>
                    <line y1={"171"} x1={"105"} y2={"179"} x2={"105"} className={"figure-axis-dash"}/>
                    <line y1={"171"} x1={"245"} y2={"179"} x2={"245"} className={"figure-axis-dash"}/>
                    <line y1={"171"} x1={"315"} y2={"179"} x2={"315"} className={"figure-axis-dash"}/>

                    <text x={"180"} y={"245"} alignmentBaseline={"central"} className={"figure-axis-text"}>-R/2</text>
                    <text x={"180"} y={"315"} alignmentBaseline={"central"} className={"figure-axis-text"}>-R</text>
                    <text x={"180"} y={"35"} alignmentBaseline={"central"} className={"figure-axis-text"}>R</text>
                    <text x={"180"} y={"105"} alignmentBaseline={"central"} className={"figure-axis-text"}>R/2</text>

                    <text x={"35"} y={"167"} textAnchor={"middle"} className={"figure-axis-text"}>-R</text>
                    <text x={"105"} y={"167"} textAnchor={"middle"} className={"figure-axis-text"}>-R/2</text>
                    <text x={"245"} y={"167"} textAnchor={"middle"} className={"figure-axis-text"}>R/2</text>
                    <text x={"315"} y={"167"} textAnchor={"middle"} className={"figure-axis-text"}>R</text>
                </svg>
            </Fragment>
        )
    }

    placeCirce = (e) => {
        this.pt.x = e.clientX;
        this.pt.y = e.clientY;
        this.pt = this.pt.matrixTransform(this.graph.getScreenCTM().inverse());

        this.circle.setAttribute('cx', this.pt.x);
        this.circle.setAttribute('cy', this.pt.y);
        this.graph.append(this.circle);
    }

    hideCircle = (e) => {
        this.circle.setAttribute('cx', -40);
        this.circle.setAttribute('cy', -40);
    }

    suppressContextMenu = (e) => {
        e.preventDefault();
    }
}