import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import MainPage from './pages/mainPage/mainPage';
import Berufskunde from './pages/berufsKunde/berufsKunde';
import Filmprojekt from './pages/filmProjekt/filmProjekt';
import FirstEvent from './pages/filmProjekt/events/event1';

const filmEvents=["event1","event2"]
const berufEvents=["event1","event2"]

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/berufskunde" element={<Berufskunde />} />
        <Route path="/filmprojekt" element={<Filmprojekt />} />
        <Route path="/" element={<MainPage />} />
        {filmEvents.map((event)=>{
          return <Route path = {`/filmprojekt/${event}`} ></Route>
        })}
        {berufEvents.map((event)=>{
          return <Route path = {`/berufskunde/${event}`} ></Route>
        })}
      </Routes>
    </Router>
  );
}
export default App