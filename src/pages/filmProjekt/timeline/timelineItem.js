import './timelineStyling.css'

function getDayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
  
    return dayOfYear;
  }
  
function TimelineItem(props){
    const myDate = props.date
    const percentFromTop = (getDayOfYear(myDate) / 365) * 100;
    //with this variable, we can position the item properly on the timeline depending on its date.
    const dateString = `${myDate.getDate()}.${myDate.getMonth()+1}.${myDate.getFullYear()}`
    return <div className="itemContainer"
    style={{position:'absolute',top:`${percentFromTop}%`}}>
        <div className='timelineItem'>
        <div class="timelineItemInfo">
            <h2 className = "itemTitle">
                {props.title}
            </h2>
            <h3 className = "itemText">{dateString}</h3>
        </div>

        </div>
    </div>
}
export default TimelineItem;