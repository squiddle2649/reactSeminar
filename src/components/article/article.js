import React from 'react'
import './articleStyling.css'
function Article(props){
    
    const childrenArray = React.Children.toArray(props.children);

    return <div className="articleContainer">
        <div className = "articleHeader">{childrenArray}</div>
    </div>

}
export default Article