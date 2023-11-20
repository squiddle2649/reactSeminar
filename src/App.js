import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import MainPage from './pages/mainPage/mainPage';
import Berufskunde from './pages/berufsKunde/berufsKunde';
import Filmprojekt from './pages/filmProjekt/filmProjekt';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/berufskunde" element={<Berufskunde />} />
        <Route path="/filmprojekt" element={<Filmprojekt />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}
export default App