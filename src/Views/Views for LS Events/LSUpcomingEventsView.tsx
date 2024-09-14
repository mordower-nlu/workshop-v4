import { GetUpcomingEventList } from "../../Utilities/DateSortingUtilities";
import { PrimaryAccordionToggle } from "./LSEventAccordionView";
import { LSEventListView } from "./LSEventListView";

export function LSUpcomingEventsView(){
    let upcomingDates = GetUpcomingEventList();
    if (upcomingDates.length===0){
        return null;
    }

    return <>
        <PrimaryAccordionToggle title="Upcoming Events & Workshops"/>
        <div className="primary_accordion__content">
        <LSEventListView title="Upcoming" eventList={upcomingDates}/>
        </div>
    
    
    
    </>

}