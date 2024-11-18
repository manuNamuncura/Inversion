import React, { useState } from 'react';
import Home from './Components/Home';
import Main from './Components/Main';
import InvestmentTypes from './Components/Analisis';
import Bonds from './Components/Bonds';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const navigate = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    // <div>
    //   {currentScreen === 'home' && <Home onNavigate={navigate} />}
    //   {currentScreen === 'main' && <Main onNavigate={navigate} />}
    //   {currentScreen === 'investmentTypes' && <InvestmentTypes onNavigate={navigate} />}
    //   {currentScreen === 'bonds' && <Bonds onNavigate={navigate} />}
    // </div>
    // <div>
    //   <InvestmentTypes/>
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analisis-mercado" element={<InvestmentTypes />} />
        {/* <Route path="/regulacion-cumplimiento" element={<RegulacionCumplimiento />} />
        <Route path="/educacion-financiera" element={<EducacionFinanciera />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
