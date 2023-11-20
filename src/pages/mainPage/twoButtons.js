import { Link } from 'react-router-dom';

function TwoButtons(props){
    const buttonStyle = {
      fontFamily:window.appleFont,
      color:"white",
      backgroundColor:"black",
      borderRadius: "10px",
      width:"45%",
      height:"45vh",
      margin:"20px",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      textDecoration: "none"

    } 
    const containerStyle = {
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      
  
    }
    return <div className = "container" style = {containerStyle}>
      <Link to="/berufskunde"style={buttonStyle}>
        <h1>Berufskunde</h1>
      </Link>
      <Link to ="/filmprojekt" style={buttonStyle}>
        <h1>Filmprojekt</h1>
      </Link>
    </div>
  
  }
export default TwoButtons;