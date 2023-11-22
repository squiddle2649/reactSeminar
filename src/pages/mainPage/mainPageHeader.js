

window.appleFont = "Inter,-apple-system,BlinkMacSystemFont,avenir next,avenir,segoe ui,helvetica neue,helvetica,Cantarell,Ubuntu,roboto,noto,arial,sans-serif"
function MainPageHeader(){
  const myStyle = {
    fontFamily:window.appleFont
  }
  const containerStyle={
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column"
  }
  return (<div style={containerStyle}>
    <h1 style = {myStyle}>P-Seminar-Portfolio</h1>
    <h2 style = {{fontFamily:window.appleFont}}>Bruno Avelar</h2>
  </div>)
}

export default MainPageHeader