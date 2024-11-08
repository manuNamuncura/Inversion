import React, { useState } from 'react';
import Home from './Components/Home';
import Main from './Components/Main';
import InvestmentTypes from './Components/InvestmentTypes';
import Bonds from './Components/Bonds';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const navigate = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div>
      {currentScreen === 'home' && <Home onNavigate={navigate} />}
      {currentScreen === 'main' && <Main onNavigate={navigate} />}
      {currentScreen === 'investmentTypes' && <InvestmentTypes onNavigate={navigate} />}
      {currentScreen === 'bonds' && <Bonds onNavigate={navigate} />}
    </div>
  );
}

export default App;
