import './gridStyling.css'

function Block(){
    return <div className ="gridContainer">
        <div className = "grid">
            <div className = "blockContainer">
                <div className = "block"></div>
            </div>
            <div className = "blockContainer">
                <div className = "block"></div>
            </div>
            <div className = "blockContainer">
                <div className = "block"></div>
            </div>
            <div className = "blockContainer">
                <div className = "block"></div>
            </div>
        </div>
    </div>
}

export default Block