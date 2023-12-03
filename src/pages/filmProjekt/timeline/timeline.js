import './timelineStyling.css'
import TimelineItem from './timelineItem';

function Timeline(props){
    const myEvents = props.events;
    return <div className="timelineContainer">
        <div className = "timeline">
            {myEvents.map((event)=>{
                
             return <TimelineItem 
             title = {event.title}
              date = {event.date}>
              </TimelineItem>
            })}
            <TimelineItem
            title="november"
            date={new Date(2023, 11, 1)}
            ></TimelineItem>
        </div>
    </div>
}


export default Timeline