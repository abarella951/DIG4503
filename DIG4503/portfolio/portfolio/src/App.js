import React from 'react';
import HomePage from './components/homepage'
import './index.css';

function App() {
  const fname = 'Alyssa';
  return (
    <HomePage firstName={fname} />
  )
}

export default App;
