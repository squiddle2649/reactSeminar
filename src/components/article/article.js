import React from 'react'
import './articleStyling.css'

function Article(props){
    
    const childrenArray = React.Children.toArray(props.children);
    return <div className='pageContainer'>
        
            <div className="articleContainer">
                <div className = "articleContent">
                <hr></hr>

                {childrenArray}
                </div>
            
                </div>
        
        
    </div>
    

}

export default Article