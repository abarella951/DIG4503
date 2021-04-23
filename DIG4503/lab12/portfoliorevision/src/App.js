import React from 'react';
import HomePage from './components/homepage';
import './components/app.css';


function App() {
  
  const fname = 'there';
  return (
    <HomePage firstName={fname} />
  );
}

export default App;
