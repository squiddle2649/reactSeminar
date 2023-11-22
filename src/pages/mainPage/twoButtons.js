import { Link } from 'react-router-dom';
import './mainPageStyling/twoButtonsStyling.css'
function TwoButtons(){
  
    const containerStyle = {
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
    }
    

    
    return <div className = "container" style = {containerStyle}>
      <Link to="/berufskunde" className="button berufButton">
        <h1>Berufskunde</h1>
      </Link>
      <Link to ="/filmprojekt" className="button filmButton">
        <h1>Filmprojekt</h1>
      </Link>
    </div>
  
  }
export default TwoButtons;