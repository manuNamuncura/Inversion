import React, { useState } from 'react';
import Home from './Components/Home';
import Regulacion from './Components/Regulacion';
import InvestmentTypes from './Components/Analisis';
import Tendencias from './Components/Tendencias';
import Educacion from './Components/Educacion';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const navigate = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analisis-mercado" element={<InvestmentTypes />} />
        <Route path="/tendencias" element={<Tendencias />} />
        <Route path="/educacion-financiera" element={<Educacion />} />
        <Route path="/regulacion-cumplimiento" element={<Regulacion />} />
      </Routes>
    </Router>
  );
}

export default App;
