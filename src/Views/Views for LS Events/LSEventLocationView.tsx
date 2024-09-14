import { ReactElement } from "react";
import { LSEvent } from "../../Models/LSEvent";
import { LSEventLocation } from "../../Models/LSEventLocationEnum";



function locationHelperFunction(location:LSEventLocation, key?:string){
    switch(location){
        case LSEventLocation.ATRIUM:
            return <span key={key}><strong>Location: </strong>Chicago Campus - The 2nd-Floor Atrium</span>
        case LSEventLocation.DEN:
            return <span key={key}><strong>Location: </strong>The Den (Chicago Campus, Room 6005)</span>
        case LSEventLocation.LSSPACE:
            return <span key={key}><strong>Location: </strong>The Learning Support Space (Chicago Campus, Room 6003)</span>
        case LSEventLocation.WHEELING:
            return <span key={key}><strong>Location: </strong>The Public Forum (Wheeling Campus, First Floor)</span>
        case LSEventLocation.TBD:
            return <span key={key}><strong>Location: </strong><em>TBD</em></span>
        case LSEventLocation.Other:
        case LSEventLocation.STUDYTABLES:
            return <span key={key}><strong>Zoom Link: </strong><a title="Study Tables Zoom" href="https://nl.zoom.us/my/studytables" target="_blank" rel="noopener">https://nl.zoom.us/my/studytables</a></span>
       
    }
}

//This function returns the JSX to be used when rendering the location where an event will take place.
export function GetLocationView(lsEvent:LSEvent){
    if (lsEvent.eventLocationOverride!==null &&
        lsEvent.eventLocationOverride!==undefined
    ){
        console.log("The location override is not null.");
        return <span>{lsEvent.eventLocationOverride}</span>;
    }

    

    if (Array.isArray(lsEvent.lsEventLocation)){
        return <>
            {lsEvent.lsEventLocation.map(
                (elem,index)=>{
                    return <span key={lsEvent.eventTitle+"-location-"+index}>{locationHelperFunction(elem,"location-"+index)}<br/></span>;

                }
            )}
        </>

    }
    else
    {
        return <>{locationHelperFunction(lsEvent.lsEventLocation)}<br/></>
    }

    
}