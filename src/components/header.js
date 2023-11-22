import { Link } from 'react-router-dom';

function Header(props){
  const containerStyle={
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    marginBottom:"0px",
    marginTop:"20px"
  }
  const linkStyle={
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row"
  }
  const ElementStyle={
    margin:"15px",
    height:"fit-content"
  }
  return(
    <div style={containerStyle}>
      <h1>{props.title}</h1>
      <div style={linkStyle}>
        <Link to={props.link1} style = {ElementStyle}><h3>{props.link1Title}</h3></Link>
        <Link to={props.link2} style = {ElementStyle}><h3>{props.link2Title}</h3></Link>
      </div>
    </div>
  )
}

export default Header