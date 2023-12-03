import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import MainPage from './pages/mainPage/mainPage';
import Berufskunde from './pages/berufsKunde/berufsKunde';
import Filmprojekt from './pages/filmProjekt/filmProjekt';
import BerufText from './pages/berufsKunde/berufsKundeText'
import FilmprojektText from './pages/filmProjekt/filmprojektText'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/berufskunde" element={<Berufskunde />} />
        <Route path="/filmprojekt" element={<Filmprojekt />} />
        <Route path="/" element={<MainPage />} />
        {window.filmEvents.map((event)=>{
          return <Route path = {`/filmprojekt/${event}`} element={<FilmprojektText topic={event}/>}></Route>
        })}
        {window.berufTitles.map((event)=>{ 
          return <Route path = {`/berufskunde/${event}`} element={<BerufText topic={event}/>}></Route>
        })}
      </Routes>
    </Router>
  );
}
export default App