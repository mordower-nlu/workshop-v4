import { GlobalEventMap } from "../Models/GlobalEventList";
import { LSEvent } from "../Models/LSEvent";


export function GetUpcomingEventList(){
    let upcomingDates=new Array<LSEvent>();
    let todayDate=new Date();
    let weekFromTodayDate = new Date();
    weekFromTodayDate.setDate(weekFromTodayDate.getDate()+7);

    GlobalEventMap.forEach(
        (array)=>{

            array.forEach(

                (lsEvent)=>{
                    
                    if (
                        (lsEvent.eventDate >= todayDate) &&
                        (lsEvent.eventDate <= weekFromTodayDate)

                    )
                    {
                        upcomingDates.push(lsEvent);
                    }

                }


            )

        }


    );
    //console.log(upcomingDates);
    return upcomingDates;
}