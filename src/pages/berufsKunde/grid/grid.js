import './gridStyling.css'
import { Link } from 'react-router-dom';
function Block(props){
    
    return <Link style={{textDecoration:"none"}}  className="blockContainer" to = {`/berufskunde/${props.title}`}>
            <div className = "block">
                <div className = "blockText">
                    {props.title}
                </div>
            </div>
        </Link>
}

function Grid(props){
    const array = props.titles
    return <div className ="gridContainer">
        <div className = "grid">
            {array.map((i)=>(
                <Block title ={i}></Block>
            ))}            
        </div>
    </div>
}

export default Grid
