import './timelineStyling.css'
import { Link } from 'react-router-dom';

function dayBetweenDates(date1, date2){
    const diffInMs   = new Date(date2) - new Date(date1)
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    return Math.floor(diffInDays)
}


function TimelineItem(props){
    const startDate = new Date('2023-9-12')
    const myDate = props.date
    // const percentFromTop = (getDayOfYear(myDate) / 365) * 100;
    const percentFromTop = (dayBetweenDates(startDate,myDate) / 318) * 100;
    //with this variable, we can position the item properly on the timeline depending on its date.
    const dateString = `${myDate.getDate()}.${myDate.getMonth()+1}.${myDate.getFullYear()}`
    return <Link className="itemContainer" to={`/filmprojekt/${props.title}`}
            style={{position:'absolute',top:`${percentFromTop}%`}}>
                <div className='timelineItem'>
                <div class="timelineItemInfo">
                    <h2 className = "itemTitle">
                        {props.title}
                    </h2>
                    <h3 className = "itemText">{dateString}</h3>
                </div>
                </div>
            </Link>
    
    
}
export default TimelineItem;