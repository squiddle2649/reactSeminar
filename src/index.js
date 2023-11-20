import { useState } from 'react';
import ReactDOM from 'react-dom/client';

const appleFont = "Inter,-apple-system,BlinkMacSystemFont,avenir next,avenir,segoe ui,helvetica neue,helvetica,Cantarell,Ubuntu,roboto,noto,arial,sans-serif"

const root = ReactDOM.createRoot(document.getElementById('root'));

function MyHeader(){
  const myStyle = {
    fontFamily:appleFont
  }
  const containerStyle={
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column"
  }
  return (<div style={containerStyle}>
    <h1 style = {myStyle}>P-Seminar-Portfolio</h1>
    <h2 style = {{fontFamily:appleFont}}>Bruno Avelar</h2>
  </div>)
}
function Block(props){
  const blockStyle = {
    fontFamily:appleFont,
    backgroundColor:"black",
    borderRadius: "10px",
    width:"45%",
    height:"45vh",
    margin:"20px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  } 
  const containerStyle = {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    

  }
  return <div className = "container" style = {containerStyle}>
    <div style = {blockStyle}><h1 style = {{color:"white"}}>Berufskunde</h1></div>
    <div style = {blockStyle}><h1 style = {{color:"white"}}>Filmprojekt</h1></div>
  </div>

}

root.render(<div>
  <MyHeader></MyHeader><Block></Block>
</div>)