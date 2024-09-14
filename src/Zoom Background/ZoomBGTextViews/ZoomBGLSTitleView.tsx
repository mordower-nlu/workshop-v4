import { defaultTextMargin, defaultTitleSize, eventViewMaxY, rootThree, svgHeight, svgWidth } from "../ZoomBGConstants";

/*
This module defines what's necessary to display the "STUDY TABLES, MAY 10TH - BLAH BLAH" stuff at the top.


*/

export function ZoomBGLSTitle(x:number, y:number){
    return (<text className={"zbg-main-title with-text-shadow"} fontSize={"4em"} x={x} y={y}>
            STUDY TABLES
        </text>);
}


export function ZoomBGWeekDate(x:number,y:number,dateString:string){
    return (
    <text className={"zbg-main-date-range with-text-shadow"} fontSize={"4em"} x={x} y={y}>
        {dateString}
    </text>
);

}

export function ZoomBGTitlePolygon(radius:number,startX:number,thaThickness:number){
    let darkBgPoints = "";
    darkBgPoints+= 2*radius/rootThree+thaThickness+",0 ";
    darkBgPoints+= radius/rootThree+thaThickness+","+radius+" ";
    darkBgPoints+= (svgWidth-startX)+","+radius+" ";
    darkBgPoints+=(svgWidth-startX)+","+2*radius+" ";
    darkBgPoints+=radius/rootThree+","+2*radius+" ";
    darkBgPoints+="0,"+radius+" ";
    darkBgPoints+=radius/rootThree+",0";
    
    let lightBgPoints = "";
    lightBgPoints+= 2*radius/rootThree+thaThickness+",0 ";
    lightBgPoints+= (svgWidth-startX)+",0 ";
    lightBgPoints+= (svgWidth-startX)+","+radius+" ";
    lightBgPoints+= radius/rootThree+thaThickness+","+radius;
    

    let textPathString1 = "";
    textPathString1 += "M" + (2*radius/rootThree+thaThickness) + " " + (2*radius/3) +" ";
    textPathString1 += "L"+ (svgWidth-startX)+" "+(2*radius/3)+" ";
    textPathString1 += "Z";

    let textPathString2 = "";
    textPathString2 += "M" + (2*radius/rootThree+thaThickness) + " " + 3*radius/2 +" ";
    textPathString2 += "L"+ (svgWidth-startX)+" "+3*radius/2+" ";
    textPathString2 += "Z";

//2*radius/rootThree+thaThickness+",0 "
    return <g transform={"translate("+startX+",0)"}>
        <polygon points={darkBgPoints} className="zbg-bg"/>
        <polygon points={lightBgPoints} className="hex-textbox-class" />
        <path id="firstTextString" d={textPathString1} stroke="red"/>
        <path id="secondTextString" d={textPathString2} stroke="red"/>
        <text className={"zbg-main-title with-text-shadow"} fontSize={"4em"} >
            <textPath href="#firstTextString" startOffset="1em" >STUDY TABLES</textPath>
        </text>
        <text className={"zbg-main-date-range with-text-shadow"} fontSize={"4em"}>
            <textPath href="#secondTextString" >MAY 20TH - 24TH</textPath>
        </text>


    </g>;
}

//This function displays Learning Support at the bottom of the screen.
export function ZoomBGLSDepartmentName(){
    let pathString1Y = eventViewMaxY*svgHeight + defaultTitleSize/2 + defaultTextMargin;
    let pathString2Y =  eventViewMaxY*svgHeight + 2*defaultTitleSize + 2*defaultTextMargin;

    let pathString1 = "M "+defaultTextMargin+" "+pathString1Y;
    pathString1 += " l 3000 0 Z";
    let pathString2 = "M "+defaultTextMargin+" "+pathString2Y;
    pathString2 += " l 3000 0 Z";

    return <g>
        <path id="lstitlepath1" d={pathString1} stroke="red"/>
        <path id="lstitlepath2" d={pathString2} stroke="red"/>
        <text className={"zbg-main-date-range"} fontSize={defaultTitleSize}>
            <textPath href="#lstitlepath1">Learning</textPath>
            
            <textPath href="#lstitlepath2">Support</textPath>

        </text>
    </g>
}