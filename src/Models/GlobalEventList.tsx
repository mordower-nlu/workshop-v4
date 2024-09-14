/*
 * 
 *  These should be global-scoped maps.
 * 
 *  A key part of making this whole thing work is ensuring that our CSV filenames are matching, since I'm not sure how individual properties are indexed when converting them to objects.
 * 
 *  We'll have to manually adjust the fields of our CSV file, but that's okay.
 *      
 * 
 */

import { LSEvent } from "./LSEvent";
import { LSEventSublist } from "./LSEventSublist";
import { LSEventStringToEnumMap, LSEventType } from "./LSEventTypeEnum";
import lsEventData from '../assets/workshopschedule.csv'; //data URI
import { LSEventLocation } from "./LSEventLocationEnum";


export var GlobalEventMap = new Map<LSEventType,Array<LSEvent>>();
export var GlobalSublistMap = new Map<string,LSEventSublist>();
export const TermID = "Fall 2024";


//Creates the LS Event Type Map
export function InitializeGlobalEventListMap() {
    GlobalEventMap.set(LSEventType.APA,new Array());
    GlobalEventMap.set(LSEventType.ELL,new Array());
    GlobalEventMap.set(LSEventType.CSIS,new Array());
    GlobalEventMap.set(LSEventType.MTH,new Array());
    GlobalEventMap.set(LSEventType.Other,new Array());
    GlobalEventMap.set(LSEventType.ENG,new Array());
    GlobalEventMap.set(LSEventType.WELCOMEWEEK,new Array());
    GlobalEventMap.set(LSEventType.STUDYJAMS,new Array());
}

//This function takes the object generated from the CSV entry and converts it to something matching the LSEvent type.
function convertToLSEvent(elem:any){
    
    try
    {
            
        
        let lsEventResult:LSEvent;
        lsEventResult={
            eventTitle:elem.OfficialWorkshopTitle,
            eventDate: new Date(elem.Date),
            lsEventType:LSEventType.Other,
            lsEventLocation:LSEventLocation.Other,
            lsEventSublistKey:elem.SublistKey
            };    


            let timeParse = elem.StartTime.split(":");
            let modifiedHours = parseInt(timeParse[0]);
            if (modifiedHours < 9) modifiedHours+=12; 
            //console.log("Parsed time: "+timeParse[0]);
            //console.log("Modified time: "+modifiedHours);

            lsEventResult.eventDate.setHours(modifiedHours,timeParse[1]);

            //Parse event type
            if (
                elem.Department !== undefined &&
                elem.Department !== null
            )
            {
                let mapResult = LSEventStringToEnumMap.get(elem.Department.toString());
                if (mapResult !== undefined){
                    lsEventResult.lsEventType=mapResult;
                }
            }

            lsEventResult.eventEndTime=new Date(lsEventResult.eventDate);
            
            //If an end time is listed, mark it as such
            if (
                elem.EndTime !== undefined &&
                elem.EndTime !== null
            )
            {

                timeParse = elem.EndTime.split(":");
                modifiedHours = parseInt(timeParse[0]);
                if (modifiedHours < 9) modifiedHours+=12; 
                lsEventResult.eventEndTime.setHours(modifiedHours,timeParse[1]);
            }
            else
            {
                lsEventResult.eventEndTime.setHours(timeParse[0]+1,timeParse[1]);

            }


            //If Location field of parsed CSV is blank, set LSEventLocation to Study Tables.
            if (
                elem.Location === undefined 
                || elem.Location === null
                || elem.Location === ""
            )
            {
                //console.log("Location is undefinzz.");
                lsEventResult.lsEventLocation=LSEventLocation.STUDYTABLES;
            }
            else if (elem.Location !== "") 
            {
                lsEventResult.eventLocationOverride = elem.Location;
            }


            //console.log(lsEventResult);
            return lsEventResult;

    }
    catch(e){
        console.log("In convertToLSEvent: error while parsing: "+e);
    }


}


//Should Parse Objects
export function InitializeEventList(){
    InitializeGlobalEventListMap();
    lsEventData.forEach((elem:any)=>{
        //console.log(elem);
        let lsEvent = convertToLSEvent(elem);
        if (lsEvent !== undefined){
            if (GlobalEventMap.get(lsEvent.lsEventType)){
                GlobalEventMap.get(lsEvent.lsEventType)?.push(lsEvent);
            }
        } 
    });

    GlobalEventMap.forEach((elem)=>{
        elem.sort((a:LSEvent,b:LSEvent)=>{

            return (a.eventDate<b.eventDate)? -1:1;

        })


    })


}

InitializeEventList();
//console.log(GlobalEventTypeMap);