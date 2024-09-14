import { ReactElement } from "react";
import { LSEvent } from "./LSEvent";
import { LSEventType } from "./LSEventTypeEnum";

export type LSEventSublist = {
    lsEventType: LSEventType;
    lsEventList: Array<LSEvent>;
    eventDescription?:Array<ReactElement>, //primary description
    eventPostDescription?:Array<ReactElement>, //if more information is required, here's the follow-up
    lsEventSublistKey:string //the sublist will be identified by a key, usually the name of the specific workshop series to which it belongs
}