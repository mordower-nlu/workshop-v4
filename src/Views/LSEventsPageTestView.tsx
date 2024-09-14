import { GlobalEventMap, InitializeEventList } from "../Models/GlobalEventList"
import { LSEventType } from "../Models/LSEventTypeEnum"
import { GetUpcomingEventList } from "../Utilities/DateSortingUtilities"
import { LSEventAccordionView } from "./Views for LS Events/LSEventAccordionView"
import { LSEventListView } from "./Views for LS Events/LSEventListView"
import { LSPastEventsView } from "./Views for LS Events/LSPastEventsListView"
import { LSUpcomingEventsView } from "./Views for LS Events/LSUpcomingEventsView"


const StudyJamsDescription = <>
    <p>Study Jams is a multi-day event that takes place near the end of the term. It's designed to help students collaborate and finish strong!</p>
      <p>Work with Writing and Math Specialists, Instructors, Coaches, and Peer Tutors as you prepare for finals. Refreshments will be served, and all attendees will be entered in a raffle to win NLU Swag!</p>
      <p>The event runs simultaneously at three separate locations: Chicago, Wheeling, and virtually over Zoom.</p>
      <p>Locations and dates below:</p>
      <hr/>
</>

const APADescription = <>
    <p>These workshops will provide an overview of APA Style citing and formatting guidelines essential for academic writing (unique to graduate and undergraduate expectations, respectively). The goal is to help you learn to document the use of outside sources in your writing and establish a format that leads to clearer communication with your writing.</p>
    <hr/>

</>


const BeadingDescription = <>
    <p> To commemorate the start of the school year, Learning Support is hosting an arts-and-crafts event. Stop by to play with cool-looking beads, make some bracelets, and meet the Learning Support team.
        <hr/>

    </p>

</>

export function LSEventsPageTestView(){
    /*let sampleEvent:LSEvent = {
        eventTitle:"Test Event",
        eventDate:new Date(2024,7,31,18,30),
        lsEventType:LSEventType.MTH,
        lsEventLocation:[LSEventLocation.ATRIUM,LSEventLocation.Other]
    }*/

    InitializeEventList();

    let items = GlobalEventMap.get(LSEventType.MTH);
    //console.log(items);

    const pastView = (items)?<LSPastEventsView title={"Past Events of the 3rd Kind:"} eventList={items}/>:null;

    const upcomingThisWeek = (items)?GetUpcomingEventList():null;
    const listView = (items)?<LSEventListView title="test list" eventList={items}/>:null;



    /*
    {
            items?.map((elem)=>{
                return <LSEventView lsEvent={elem}/>;

            })
        }
    
    */
    return <>
        <p>LSEvents Page</p>
        <LSUpcomingEventsView/>
        <LSEventAccordionView title={"Welcome Week Events"} lsEventType={LSEventType.WELCOMEWEEK} preDescription={BeadingDescription}/>
        <LSEventAccordionView title={"Math Workshops"} lsEventType={LSEventType.MTH} preDescription={null}/>
        <LSEventAccordionView title={"Computer Science & Information Systems Workshops"} lsEventType={LSEventType.CSIS} preDescription={null}/>
        <LSEventAccordionView title={"APA Citation Workshops"} lsEventType={LSEventType.APA} preDescription={APADescription}/>
        <LSEventAccordionView title={"Study Jams"} lsEventType={LSEventType.STUDYJAMS} preDescription={StudyJamsDescription}/>
        <LSEventAccordionView title={"English and Writing Skills Workshops"} lsEventType={LSEventType.ELL} preDescription={null}/>

       
    </>
}