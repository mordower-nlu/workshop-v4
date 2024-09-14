import { LSEvent } from "../../Models/LSEvent";
import { GetMegaShortDateString } from "../../Utilities/DateStringUtilities";

export function LSPastEventsView({title,eventList}:{title:string,eventList:Array<LSEvent>}){
    if (eventList.length===0){
        return null;
    }

    else{
        return <>
            <hr/>
            <p style={{textAlign:"center"}}><strong>{title}</strong></p>
            <p>{eventList.map(
                (elem,index)=>{
                    return <em key={"past-events-"+title+"-"+index}>- {elem.eventTitle} - ({GetMegaShortDateString(elem.eventDate)})<br/></em>

        


                }


            )}
            </p>
        
        </>;


    }


}