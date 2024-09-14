import { ReactElement } from "react";
import { GlobalEventMap, TermID } from "../../Models/GlobalEventList";
import { LSEvent } from "../../Models/LSEvent";
import { LSEventType } from "../../Models/LSEventTypeEnum";
import { LSEventListView } from "./LSEventListView";
import { LSPastEventsView } from "./LSPastEventsListView";
import { LSEventSublist } from "../../Models/LSEventSublist";


//This function splits a list of events into past and current/future events.
function ParsePastEvents(eventList:Array<LSEvent>){
    let currentDate = new Date();
    let pastArray = new Array<LSEvent>();
    let futureArray = new Array<LSEvent>();
    
    
    const dateSortFunction = (lsEventA:LSEvent,lsEventB:LSEvent)=>{
        if (lsEventA.eventDate < lsEventB.eventDate){
            return -1;
        }
        else{
            return 1;
        }
    }


    //Populates future and past lists from whole list
    eventList.forEach(
        (elem)=>{
            if (elem.eventDate < currentDate){
                pastArray.push(elem);
                pastArray.sort(dateSortFunction);
            }
            else {
                futureArray.push(elem);
                futureArray.sort(dateSortFunction);
            }
        }
    )

    return {past:pastArray,future:futureArray};

}


export function AllEventsConcludedView({title}:{title:string}){
    return <>
    <em>Our {title} series has concluded for the {TermID} term.
    <br/>Stay tuned for more events, coming soon!</em>
</>;
}

export function PrimaryAccordionToggle({ title }: { title: string }){
    return (<button className="primary_accordion__toggle primary_accordion__toggle--active">
    {title}
     <span className="svg svg--plus primary_accordion__toggle__icon">
       <svg   width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
         <path d="M9.4 0l-.001 6.999L16 7v2.4l-6.601-.001L9.4 16H7l-.001-6.601L0 9.4V7l6.999-.001L7 0z"/>
       </svg>
     </span>
   </button>);
}

function CreateSublistHelperFunction(eventList:Array<LSEvent>){
    let nestedSublistMap = new Map<string,Array<LSEvent>>();
    let oneOffEvents = new Array<LSEvent>();

    eventList.forEach(
        (elem)=>{
            if (elem.lsEventSublistKey){
                if(nestedSublistMap.get(elem.lsEventSublistKey)===undefined){
                    nestedSublistMap.set(elem.lsEventSublistKey,[elem]);

                }
                else
                {
                    (nestedSublistMap.get(elem.lsEventSublistKey))?.push(elem);
                }



            }
            else
            {
                oneOffEvents.push(elem);
            }

        }
    )
    //console.log(nestedSublistMap);
    //console.log(oneOffEvents);

    return {oneOffs:oneOffEvents,sublists:nestedSublistMap};
    
}

export function PrimaryAccordionContent({title,eventList}:{title:string,eventList:Array<LSEvent>}){
    let parsedArray = ParsePastEvents(eventList);
    let sublistHelperResult = CreateSublistHelperFunction(parsedArray.future);

    //
    let sublistArray = new Array<LSEventSublist>();
    sublistHelperResult.sublists.forEach(
        (elem,key)=>{
            let sublistObject:LSEventSublist = {
                lsEventSublistKey:key,
                lsEventType:elem[0].lsEventType,
                lsEventList:elem
            }
            sublistArray.push(sublistObject);
        }
    )
    
    let sublistJsx = <>{sublistArray.map((elem,index)=>{
        return <NestedAccordion title={elem.lsEventSublistKey} eventList={elem.lsEventList} preDescription={null} postDescription={null} key={elem.lsEventSublistKey+"-nested-"+index}/>


    })}</>;
    
    const separator = (sublistHelperResult.oneOffs.length > 0 && (sublistHelperResult.sublists.size>0 || parsedArray.past.length>0))? <hr/>:null;

    return <>
        <LSEventListView title={title} eventList={sublistHelperResult.oneOffs}/>
        {separator}
        {sublistJsx}
        <LSPastEventsView title={title} eventList={parsedArray.past}/>


    </>;
}

export function NestedAccordionToggle({title}:{title:string}){
    return <button className="nested_accordion__toggle nested_accordion__toggle--active">
           {title}
           <span>
             <svg className="svg svg--plus secondary_accordion__toggle__icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
               <path d="M0 8 L16 16 L16 0 Z"></path>
             </svg>
           </span>
         </button>


}

export function NestedAccordionContent({title,eventList,preDescription,postDescription}:{title:string,eventList:Array<LSEvent>,preDescription:Array<ReactElement>|null,postDescription:Array<ReactElement>|null}){
    let parsedArray = ParsePastEvents(eventList);
    if (parsedArray.future.length===0){
        return <div className="nested_accordion__content">
            <AllEventsConcludedView title={title}/>
        </div>
    }

    let preDescripionJsx=null;
    if (
        preDescription !== null &&
        preDescription.length>0
    )
    {
        preDescripionJsx=<span>
            {preDescription.map((elem,index)=><span key={title+"-pre-description-"+index}>{elem}</span>)}
            <hr/>
        </span>
    }

    let postDescriptionJsx=null;
    if (
        postDescription !== null &&
        postDescription.length>0
    )
    {
        postDescriptionJsx=<span>
            <hr/>
            {postDescription.map((elem,index)=><span key={title+"-post-description-"+index}>{elem}</span>)}
        </span>
    }


        return <div className="nested_accordion__content">
                    {preDescripionJsx}
                    <LSEventListView title={title} eventList={eventList}/>
                    {postDescriptionJsx}
                </div>;

}


export function NestedAccordion({title,eventList,preDescription,postDescription}:{ title:string,eventList:Array<LSEvent>,preDescription:Array<ReactElement>|null,postDescription:Array<ReactElement>|null}){
    return <>
        <NestedAccordionToggle title={title}/>
        <NestedAccordionContent title={title} eventList={eventList} preDescription={preDescription} postDescription={postDescription}/>
    
    </>
}

export function LSEventAccordionView({title,lsEventType,preDescription}:{title:string,lsEventType:LSEventType,preDescription:null|any}){
    const RawEventList = GlobalEventMap.get(lsEventType);
    let eventArrays = (RawEventList !== undefined)?ParsePastEvents(RawEventList):{past:Array<LSEvent>(), future:Array<LSEvent>()};
    
    const curatedEventList = (eventArrays.future.length === 0)? <AllEventsConcludedView title={title}/> : <PrimaryAccordionContent title={title} eventList={eventArrays.future} />
    

    
    return <>
        <PrimaryAccordionToggle title={title}/>    
        <div className="primary_accordion__content">
            {preDescription}
            {curatedEventList}
            <LSPastEventsView title={title} eventList={eventArrays.past}/>
        </div>
    </>




}