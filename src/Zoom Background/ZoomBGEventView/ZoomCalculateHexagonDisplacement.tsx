import { bgColorOffset, eventViewMaxY, eventViewMinY, hexagonMargin, hexagonOuterRadius, lightBlueCoverage, pageCoverage, rootThree, svgHeight, svgWidth } from "../ZoomBGConstants";
import { HexagonOrientation } from "./ZoomHexagonOrientationEnum";


//Returns the x-coordinate for placing the hexagon in the event view
export function HexagonXDisplacement(orientation:HexagonOrientation,y:number,scale:number){
    const startX = svgWidth*(pageCoverage-bgColorOffset);
    let lineX =startX+y/rootThree;



    let xOffset = (hexagonMargin+scale*hexagonOuterRadius);
    switch(orientation)
    {
        case HexagonOrientation.LeftSide:
            xOffset*=-1;
            break;
        case HexagonOrientation.None:
            xOffset=0;
            break;
        default:
            break;
    }
    

    return lineX+xOffset;
}


//Returns the Y coordinate to place the hexagon for the event view
export function HexagonYDisplacement(numberOfEventsToDisplay:number, eventId:number){
    let subdivisions;
    let scaledStartY = eventViewMinY* svgHeight;
    let scaledEndY = eventViewMaxY*svgHeight;
    let hDiff = scaledEndY-scaledStartY; //height of middle section

    switch(numberOfEventsToDisplay){
        case 0:
        case 1:
            return scaledStartY+hDiff/2;
    }

    return 0;
    

}