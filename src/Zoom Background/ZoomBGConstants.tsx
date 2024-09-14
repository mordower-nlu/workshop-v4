/*
 * Certain constants are used to generate our Zoom Background. 
 * 
 * I'm containing them here.
 * 
 * I'm also including some utility functions here for placing stuff correctly on the page.
 * 
 */



//Utility constants for math purposes
export const rootThree = 1.732050808;
export const Pi = Math.PI; //literally just aliasing Pi to make it easier to work with.



//Global constants for whole SVG
export const svgWidth = 1920; //width of whole screen
export const svgHeight = 1080; //height of whole screen


//For background colors
export const pageCoverage = 0.55; //proportion of window where picture should start
export const lightBlueCoverage = 0.1; //proportion of window where light blue should end
export const bgColorOffset = 0.25;
export const rectPlaceholder = <rect style={{fill:"#FFCF80"}} width={svgWidth} height={svgHeight}/> //Placeholder for the stock classroom image we've been using on the right side of the screen. Currently set to some solid color.


//For event view parameters
export const hexagonOuterRadius = 60;
export const hexagonInnerRadius = 50;
export const arrowOffsetMultiplier = 0.75;
export const hexagonMargin = 30;


//NLU Emblem Logo constants
export const logoYOffset = 60;
export const logoScaleFactor = 1.75;


//Constants for mid-screen event view stuff
export const eventViewMinY = 0.1; //percentage from top that the event view section starts
export const eventViewMaxY = 0.9; //percentage from top that the event view section ends


//Constants for displaying text
export const defaultTitleSize = 62;
export const defaultTextMargin = 10;
export const defaultEventTitleSize = 18;
export const defaultEventDateSize = 16;


//Calculates the y-value of the slanty function thingy at a given x-value.
//Should be parallel to the part of a regular hexagon with vertices on the x-axis that looks like this: \
/**
 * y = sqrt(3)(x-pageCoverage*svgWidth)
 * 
 * 
 * 
 */
export function SolidBGLinearFunctionOfX(x:number){
    return rootThree*(x-pageCoverage*svgWidth);
}

