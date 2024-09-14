import { ReactElement } from "react"
import { LSEventType } from "./LSEventTypeEnum"
import { LSEventLocation } from "./LSEventLocationEnum";

/*
 * This object represents the information required for a Learning Support Event or Workshop 
 * 
 * 
 */
export type LSEvent = {
    eventTitle: string,
    eventDate: Date,
    eventEndTime?:Date,
    eventDescription?:Array<ReactElement>, //primary description
    eventPostDescription?:Array<ReactElement>, //if more information is required, here's the follow-up
    lsEventType: LSEventType,
    lsEventLocation:LSEventLocation|Array<LSEventLocation>

    //Optional key if the event is to be used in an event sublist
    lsEventSublistKey?:string

    //The following option fields override the strings used for the other stuff 
    eventTypeOverride?:string,
    eventDateOverride?:string, 
    eventLocationOverride?:string,

    //In case you need to override EVERYTHING
    eventTextTotalOverride?:Array<ReactElement>,


   

}