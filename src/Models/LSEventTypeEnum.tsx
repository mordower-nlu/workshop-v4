/*
 * At Learning Support, we host several different types of events.
 * 
 * 
 */

export enum LSEventType {
    Other,
    APA,
    ENG,
    MTH,
    CSIS,
    ELL,
    STUDYJAMS,
    WELCOMEWEEK
}



/*
 * When importing the event list from our spreadsheet, the event type/department gets imported as a string.
 * 
 * To assist with the data import, we create this hashmap here.
 * 
 * Note: we could do this as an array, but it feels more extensible to use a Map here.
 * 
 */
export var LSEventStringToEnumMap = 
    new Map<string,LSEventType>();

function InitializeStringEnumMap(){
    LSEventStringToEnumMap.set("Other",LSEventType.Other);
    LSEventStringToEnumMap.set("APA",LSEventType.APA);
    LSEventStringToEnumMap.set("MTH",LSEventType.MTH);
    LSEventStringToEnumMap.set("CSIS",LSEventType.CSIS);
    LSEventStringToEnumMap.set("ENG",LSEventType.ENG);
    LSEventStringToEnumMap.set("ELL",LSEventType.ELL);

    LSEventStringToEnumMap.set("Welcome Week",LSEventType.WELCOMEWEEK);
    LSEventStringToEnumMap.set("Study Jams",LSEventType.STUDYJAMS);

}

InitializeStringEnumMap();