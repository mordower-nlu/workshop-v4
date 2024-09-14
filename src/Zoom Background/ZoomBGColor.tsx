import { lightBlueCoverage, pageCoverage, rectPlaceholder, rootThree, svgHeight, svgWidth } from "./ZoomBGConstants";


const bgPhoto = <image href="/src/assets/bg-classroom-image.jpeg" height={svgHeight} width={svgWidth} x={0} y={0} preserveAspectRatio="xMaxYMid meet"></image>;


/**
 * 
 * @param useLight 
 * The background emblem thingy contains two separate colors.
 * If useLight is set to true, the function will generate the brighter color section.
 * If useLight is set to false, the function will generate the dark stripe.
 * 
 * 
 * @returns 
 * The function returns the background color group to be included in our final image.
 * 
 */
function GenerateSolidBGPointString(useLight:boolean){
    let result;
    let x1 = (useLight)? 0 : lightBlueCoverage *svgWidth;
    let x2 = (useLight)? lightBlueCoverage*svgWidth : pageCoverage*svgWidth;
    let x3 = (useLight)? lightBlueCoverage*svgWidth+svgHeight/rootThree : pageCoverage*svgWidth+svgHeight/rootThree;
    let x4 = (useLight)? 0 :  lightBlueCoverage*svgWidth+svgHeight/rootThree;

    result = ""+x1+",0 "+x2+",0 "+x3+","+svgHeight+" "+x4+","+svgHeight;
    //console.log("Result: "+result);
    return result;
}





//These two lines contain the coordinates from when I hardcoded the vertices of the polygons.
//const oldVersion = <g><polygon className="zbg-bg-light" points="0,0 768,0 1391.53,1080 0,1080"/>
//<polygon className="zbg-bg" points="576,0 768,0 1391.53,1080 1199.53,1080"/></g>

//This function returns the entire chunk of the svg image containing the background color/image
export function ZoomBGColor(xOffset:number) {
    return <g > 
                {bgPhoto}
                <g transform={ "translate("+(-xOffset)+",0)" }>
                    
                    <polygon className="zbg-bg-light" points={GenerateSolidBGPointString(true)} />
                    <polygon className="zbg-bg" points={GenerateSolidBGPointString(false)}/>
                    
                </g>
            </g>
}