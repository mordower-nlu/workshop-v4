import { LSEvent } from "../../Models/LSEvent";
import { LSEventView } from "./LSEventView";


//Displays a list of LSEventViews, separated by horizontal dividers.
 export function LSEventListView({title,eventList}:{title:string,eventList:Array<LSEvent>}){
    //console.log("Making a list in LSEventListView");
    return <>
        {eventList.map(
               
            (lsEvent,index)=>{
                let divider = (index>0)?<hr/>:null;

                return <span key={title+"event-list-"+index}>
                    {divider}
                    <LSEventView lsEvent={lsEvent}/>
                </span>;




            }
            
            
            )}
    
    
    </>

 }