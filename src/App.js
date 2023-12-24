import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import MainPage from './pages/mainPage/mainPage';
import Berufskunde from './pages/berufsKunde/berufsKunde';
import Filmprojekt from './pages/filmProjekt/filmProjekt';
import BerufText from './pages/berufsKunde/berufsKundeText'
import FilmprojektText from './pages/filmProjekt/filmprojektText'


function App() {
  const berufTitles = ["Berufsabend", "meine Schwächen", "meine Stärken","New item"]
  const events = [
    { date: new Date('2023-9-18'), title: 'Einführung', link:"Einführung" },
    { date: new Date('2023-11-2'), title: 'Fehler bei Dokumentarfilmen', link:"Fehler20%bei20%Dokumentarfilmen" },
    { date: new Date('2023-11-9'), title: '"Fake documentary"', link:"Fake20%documentary" },
    { date: new Date('2023-11-16'), title: 'Übungsfilm Planung', link:"ubungsfilm20%Planung" },
    { date: new Date('2023-11-30'), title: 'Übungsfilm drehen', link:"ubungsfilm20%drehen" },
    { date: new Date('2023-12-14'), title: 'Übungsfilm drehen (2)', link:"ubungsfilm20%drehen20%(2)" },
    { date: new Date('2023-12-21'), title: 'Workshop an der HFF', link:"Workshop20%an20%der20%HFF" },
  ];
  return (
    <Router>
      <Routes>
        <Route path="/berufskunde" element={<Berufskunde />} />
        <Route path="/filmprojekt" element={<Filmprojekt />} />
        <Route path="/" element={<MainPage />} />
        {events.map((event)=>{
          return <Route path = {`/filmprojekt/${event.link}`} element={<FilmprojektText topic={event.title}/>}></Route>
        })}
        {berufTitles.map((event)=>{ 
          return <Route path = {`/berufskunde/${event}`} element={<BerufText topic={event}/>}></Route>
        })}
      </Routes>
    </Router>
  );
}
export default App