import React from 'react'
import './articleStyling.css'

function Article(props){
    
    const childrenArray = React.Children.toArray(props.children);

    return <div className="articleContainer">
            <div className = "articleHeader">
            <hr></hr>
                
                {childrenArray}</div>
        </div>
    

}

export default Article