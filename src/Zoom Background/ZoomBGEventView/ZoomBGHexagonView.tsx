import { HexagonOrientation } from "./ZoomHexagonOrientationEnum";
import { arrowOffsetMultiplier, hexagonInnerRadius, hexagonOuterRadius, svgWidth } from "../ZoomBGConstants";
import { HexagonXDisplacement } from "./ZoomCalculateHexagonDisplacement";

//Generates outer hexagon
export function generateHexagonPointString(radius:number){
    let resultString="";
    for(let i = 0; i<6; i++){
        let angle = i*Math.PI*2/6;
        let x = radius*Math.cos(angle);
        let y = radius*Math.sin(angle);
        resultString+=x+","+y+" ";
    }
    //console.log(resultString);
    return resultString;
}

//
export function TextboxGroup(x:number, width:number,title:string, orientation?:HexagonOrientation, day?:string, time?:string){
    const y = -hexagonInnerRadius*Math.sin(2*Math.PI/6);
    const height = 2*hexagonInnerRadius*Math.sin(2*Math.PI/6);
    
    return <g>
        <rect className={"hex-textbox-class"} x={x} y={y} width={width} height={height}></rect>
        {GenerateTextPath("drong",title)}
    </g>
}


export function GenerateTextPath(pathId:string,text:string){
    let pathString="";
    let yOffset = -hexagonInnerRadius/2.0;
    return (
        <g>
            <path id={pathId} className={"hexagon-outer"} d={("M "+(1+arrowOffsetMultiplier)*hexagonInnerRadius +" "+yOffset+" l 100 0 Z")}/>
            <text className={"zbg-event"} fontSize={"auto"}>
                    <textPath href={"#"+pathId}>
                        {text}
                    </textPath>
            </text>
        </g>
    );
}

export function HexagonGroup(orientation:HexagonOrientation,scale:number,translateY:number) {
    let translateX = HexagonXDisplacement(orientation,translateY,scale);
    let xArrowOffset = 0;
    switch (orientation){
        case HexagonOrientation.RightSide:
            xArrowOffset =arrowOffsetMultiplier*hexagonInnerRadius;
            break;
        case HexagonOrientation.LeftSide:
            xArrowOffset = -arrowOffsetMultiplier*hexagonInnerRadius;
    }

      //  {TextboxGroup(0,200,"Give me money.",HexagonOrientation.RightSide)}
    return <g transform={"translate("+translateX+","+translateY+") scale("+scale+","+scale+")"}>
            {DrawTextBoxRectangle(translateX,orientation)}
        <g transform={"translate("+xArrowOffset+",0)"}>
            <polygon className="hexagon-arrow" points={generateHexagonPointString(hexagonInnerRadius)}></polygon>
        </g>
        <polygon className="hexagon-outer" points={generateHexagonPointString(hexagonOuterRadius)} /> 
        <polygon className="hexagon-inner" points={generateHexagonPointString(hexagonInnerRadius)} />
       

    </g>
}



/**
 * 
 * @param cx 
 * x value of center of the hexagon
 * 
 *
 * @param orientation 
 * LeftSide -- hexagon is attached to the left side
 * RightSide -- hexagon is attached to the right side
 *
 * 
 * 
 */
export function DrawTextBoxRectangle(cx:number, orientation:HexagonOrientation){
    let x;

    let width = 0;



    switch(orientation){
        case HexagonOrientation.LeftSide:
            x = -cx;
            width = cx;
            break;
        case HexagonOrientation.RightSide:
            x = 0;
            width = svgWidth-cx;
            break;
        default:
            x=0;
    }

    return <rect x={x} y={-hexagonInnerRadius*Math.sin(2.0*Math.PI/6)} width={width} height={hexagonInnerRadius*2.0*Math.sin(2*Math.PI/6)} fill={"white"} />
}