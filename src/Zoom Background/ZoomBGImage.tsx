import { bgColorOffset, logoScaleFactor, logoYOffset, svgHeight, svgWidth } from "./ZoomBGConstants";
import "../Styles/ZoomBGStyles/zoombg.css";
import { ZoomBGColor } from "./ZoomBGColor";
import { NLULogoObject } from "./NLULogoWithTextComponent";
import { HexagonGroup } from "./ZoomBGEventView/ZoomBGHexagonView";
import { HexagonOrientation } from "./ZoomBGEventView/ZoomHexagonOrientationEnum";
import { ZoomBGLSDepartmentName, ZoomBGLSTitle, ZoomBGTitlePolygon, ZoomBGWeekDate } from "./ZoomBGTextViews/ZoomBGLSTitleView";
import { HexagonXDisplacement, HexagonYDisplacement } from "./ZoomBGEventView/ZoomCalculateHexagonDisplacement";


export function ZoomBGImage(){
    return <svg viewBox={"0 0 "+svgWidth+" "+svgHeight} >
        {ZoomBGColor(bgColorOffset*svgWidth)}
        {NLULogoObject(0,logoYOffset,logoScaleFactor)}
        {HexagonGroup(HexagonOrientation.LeftSide,4,HexagonYDisplacement(1,0))}

        {HexagonGroup(HexagonOrientation.RightSide,3,HexagonYDisplacement(1,0))}
        {ZoomBGTitlePolygon(100,800,60)}
        {ZoomBGLSTitle(500,400)}
        {ZoomBGWeekDate(500,470,"Week 6")}
        {ZoomBGLSDepartmentName()}
    </svg>
}