import { LSEvent } from "../Models/LSEvent";

/*
 * Date Printing Functions
 * 
 * 
 */





//Returns the ordinal suffix of the date.
//For example, if you input March 3, this will output "rd", for the purpose of typing March 3rd
export function GetOrdinalDate(date:Date|Number){
    let dateNo = (date instanceof Date) ? date.getDate() : date;
    if (
        dateNo === 1 || 
        dateNo === 21 || 
        dateNo === 31 
        )
        {

            return "st";
        }

    if (
        dateNo === 2 ||
        dateNo === 22
        )
        {
            return "nd";
        }

    if (
        dateNo === 3 ||
        dateNo === 23
        )
        {
            return "rd";
        }

    return "th";
}


//Returns date string in format of:
//Monday, June 3rd (3-6 PM Chicago Time) 
export function GetFullDateString(date:Date|string,endDate?:Date|string){
    if (typeof(date)=== 'string'){return date;}
    
    let tempDate;
    if (endDate){
     tempDate = new Date(endDate);

    }
    else{
        tempDate = new Date(date);
        tempDate.setHours(date.getHours()+1);
    }

    let result;
    let tempDateString1;
    let tempDateString2;
    if(date.getMinutes()!==0){
        result = new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            month:'long',
            day:'numeric',
            timeZone: 'America/Chicago'
          }).format(date);
          
          tempDateString1 = new Intl.DateTimeFormat('en-US',
          {
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
              timeZone: 'America/Chicago'
          }
        ).format(date);

          tempDateString2 = new Intl.DateTimeFormat('en-US',
            {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
                timeZone: 'America/Chicago'
            }
          ).format(tempDate);
    }
    else
    {
        result = new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            month:'long',
            day:'numeric',
          }).format(date);
    
          tempDateString1 = new Intl.DateTimeFormat('en-US',
          {
              hour: 'numeric',
              hour12: true,
              timeZone: 'America/Chicago'
          }
        ).format(date);

          tempDateString2 = new Intl.DateTimeFormat('en-US',
            {
                hour: 'numeric',
                hour12: true,
                timeZone: 'America/Chicago'
            }
          ).format(tempDate);
    }

    
    return result;
}


//Returns a shorter version of the date -- useful for generating images
export function GetShortDateString(date:Date|string){
    if (typeof(date)=== 'string'){return date;}
    
    let tempDate = new Date(date);
    tempDate.setHours(date.getHours()+1);

    let result;
    let tempDateString;
    if(date.getMinutes()!==0){
        result = new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            timeZone: 'America/Chicago'
          }).format(date);
    
          tempDateString = new Intl.DateTimeFormat('en-US',
            {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
                timeZone: 'America/Chicago'
            }
          ).format(tempDate);
    }
    else
    {
        result = new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            hour: 'numeric',
            hour12: true,
            timeZone: 'America/Chicago'
          }).format(date);
    
          tempDateString = new Intl.DateTimeFormat('en-US',
            {
                hour: 'numeric',
                hour12: true,
                timeZone: 'America/Chicago'
            }
          ).format(tempDate);
    }

    
    return result+" - "+tempDateString;
}

//Shortest date - Example: May 5
export function GetMegaShortDateString(date:Date|string){
    if (typeof(date)=== 'string'){return date;}

    let result = new Intl.DateTimeFormat('en-US', {
        month:'short',
        day:'numeric'
      }).format(date);

      return result;
}

//Returns a date object corresponding to the Monday of whatever week we're on, + some offset.
export function GetMondayOfWeek(weekOffset:number){
    let today:Date = new Date();
    //console.log("Today: "+today);
    //Reminder: Sunday has day index = 0
    let dayId:number = today.getDay();
    
    let mondayOfWeek:Date = new Date();
    mondayOfWeek.setDate(today.getDate()-dayId+7*weekOffset+1);
    //console.log("Monday of this week: "+mondayOfWeek);
    return mondayOfWeek;
}

//Returns a date object corresponding to the Friday of whatever week we're on, + some offset.
export function GetFridayOfWeek(weekOffset:number){
    let today:Date = new Date();
    //console.log("Today: "+today);
    //Reminder: Sunday has day index = 0
    let dayId:number = today.getDay();

    let fridayOfWeek:Date = new Date();
    fridayOfWeek.setDate(today.getDate()-dayId+7*weekOffset+5);
    //console.log("Friday of this week: "+fridayOfWeek);

    return fridayOfWeek;

}


//Returns a string in the format of "April 29 - May 3" or similar.
export function GetWeekDates(weekOffset:number){
    
    
    let mondayOfWeek:Date = GetMondayOfWeek(0);

    let fridayOfWeek:Date = GetFridayOfWeek(0);
   
    //Sets the format to use for the returned string.
    let dateStringFormat = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric'
    });
    
    let formattedString = dateStringFormat.formatRange(mondayOfWeek,fridayOfWeek);
    //console.log("Formatted String: "+formattedString);

    return formattedString;
   
}


//Given a list of events, this returns the events that have already happened
export function GetPastEventList(list:Array<LSEvent>)
{
    let todayDate = new Date();
    let pastList = new Array<LSEvent>();
    list.forEach(element => {
        if (todayDate>element.eventDate){
            pastList.push(element);
        }
    });
    
    //For debugging
    //pastList.forEach(element => {
      //  console.log("List of past events: "+element.title+": "+element.eventDate);
        
    //});


    return pastList;

}


export function GetTwoTimesString(date:Date|string,endDate?:Date|string){
    if (typeof(date)=== 'string'){return date;}
    
    let tempDate; 
    if (endDate){
     tempDate = new Date(endDate);

    }
    else{
        tempDate = new Date(date);
        tempDate.setHours(date.getHours()+1);
    }

    let result;
    let tempDateString1;
    let tempDateString2;
    if(date.getMinutes()!==0){
        result = new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            month:'long',
            day:'numeric',
            timeZone: 'America/Chicago'
          }).format(date);
          
          tempDateString1 = new Intl.DateTimeFormat('en-US',
          {
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
              timeZone: 'America/Chicago'
          }
        ).format(date);

          tempDateString2 = new Intl.DateTimeFormat('en-US',
            {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
                timeZone: 'America/Chicago'
            }
          ).format(tempDate);
    }
    else
    {
        result = new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            month:'long',
            day:'numeric',
          }).format(date);
    
          tempDateString1 = new Intl.DateTimeFormat('en-US',
          {
              hour: 'numeric',
              hour12: true,
              timeZone: 'America/Chicago'
          }
        ).format(date);

          tempDateString2 = new Intl.DateTimeFormat('en-US',
            {
                hour: 'numeric',
                hour12: true,
                timeZone: 'America/Chicago'
            }
          ).format(tempDate);
    }

    
    return tempDateString1+" - "+tempDateString2+" (Chicago Time)";
}