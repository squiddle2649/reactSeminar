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

function Grid(props){
    const array = props.titles
    return <div className ="gridContainer">
        <div className = "grid">
            {array.map((i)=>(
                <Block title ={i}></Block>
            ))}
            {/* <Block title ="My strengths" ></Block>
            <Block title ="My weaknesses" ></Block>
            <Block title ="Berufsabend" ></Block>            
            <Block title ="new" ></Block>*/}
            
        </div>
    </div>
}

export default Grid
