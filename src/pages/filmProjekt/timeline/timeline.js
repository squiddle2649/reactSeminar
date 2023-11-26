import './timelineStyling.css'

function Timeline(props){
    return <div className="timelineContainer">
        <div className = "timeline">
            <TimelineItem 
            
            ></TimelineItem>
        </div>
    </div>
}
function TimelineItem(props){
    

    return <div className="itemContainer">
        <div className='timelineItem'>
        <div class="timelineItemInfo">
            <h2 className = "itemTitle">
            
            </h2>
            <h3 className = "itemText"></h3>
        </div>

        </div>
    </div>

}
function Month(props){
    return <div className='month'>{props.month}</div>
}
export default Timeline