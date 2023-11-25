import './timelineStyling.css'

function Timeline(){
    return <div className = "timeline">
        <TimelineItem></TimelineItem>
        <TimelineItem></TimelineItem>
        <TimelineItem></TimelineItem>
        
    </div>
}
function TimelineItem(){
    return <div className='timelineItem'></div>
}
export default Timeline