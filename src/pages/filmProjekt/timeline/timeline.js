import './timelineStyling.css'
import TimelineItem from './timelineItem';

function Timeline(props){
    const myEvents = props.events;
    return <div className="timelineContainer">
        <div className = "timeline">
            {myEvents.map((event)=>{
                
             return <TimelineItem 
             link={event.link}
             title = {event.title}
              date = {event.date}>
              </TimelineItem>
            })}
            
        </div>
    </div>
}


export default Timeline