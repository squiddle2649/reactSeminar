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
  if(props.article){
    return <div style={linkStyle}>
    <Link to={"/filmprojekt"} style = {ElementStyle}><h3>Filmprojekt</h3></Link>
    <Link to={"/"} style = {ElementStyle}><h3>Main page</h3></Link>
    <Link to={"/berufskunde"} style = {ElementStyle}><h3>Berufskunde</h3></Link>
  </div>
  }
  if(props.title===null){
    return(
        <div style={linkStyle}>
          <Link to={props.link1} style = {ElementStyle}><h3>{props.link1Title}</h3></Link>
          <Link to={props.link2} style = {ElementStyle}><h3>{props.link2Title}</h3></Link>
        </div>
      
    )
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