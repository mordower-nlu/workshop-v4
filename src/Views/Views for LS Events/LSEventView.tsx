import { ReactElement, useState } from "react";
import { LSEvent } from "../../Models/LSEvent";
import { GetFullDateString, GetTwoTimesString } from "../../Utilities/DateStringUtilities";
import { GetLocationView } from "./LSEventLocationView";

export function LSEventView({lsEvent}:{lsEvent:LSEvent}){
    
    //Override all content and just produce a paragraph
    if (lsEvent.eventTextTotalOverride){
        const outputText = lsEvent.eventTextTotalOverride.map((e)=>e);
        //console.log("where");

        return <p>
            {outputText}
        </p>
    }
    
    
    
    //Description that goes before the event information
    const [preDescriptionString] = useState(
        (lsEvent.eventDescription)? 
            <>{lsEvent.eventDescription.map((elem:ReactElement)=>elem)}<hr/></>
            :null    
    );
    
    //Description that goes after the event information
    const [postDescriptionString] = useState(
        (lsEvent.eventPostDescription)? 
            <>{lsEvent.eventPostDescription.map((elem:ReactElement)=>elem)}<hr/></>
            :null    
    );
    
    //Date when the event will take place
    const [eventDateString] = useState(
        (lsEvent.eventDateOverride)? lsEvent.eventDateOverride : <><br/>{GetFullDateString(lsEvent.eventDate,lsEvent.eventEndTime)}<br/>{GetTwoTimesString(lsEvent.eventDate,lsEvent.eventEndTime)}
        </>
    )

    //String for the location
    const [eventLocationString] = useState(
        (lsEvent.eventLocationOverride)? <><br/><b>Location: </b>{lsEvent.eventLocationOverride}</> : <><br/>
        {GetLocationView(lsEvent)}
        </>


    )

    //console.log(lsEvent);
    return (

        <>
            {preDescriptionString}
            <strong>{lsEvent.eventTitle}</strong>
            {eventDateString}
            {eventLocationString}
            {postDescriptionString}
        </>

    );
}