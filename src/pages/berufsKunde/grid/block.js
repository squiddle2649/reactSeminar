import './gridStyling.css'

function Block(props){
    
    return <div className = "blockContainer">
        <div className = "block">
            <div className = "blockText">
                {props.title}
            </div>
        </div>
    </div>
}


export default Block
