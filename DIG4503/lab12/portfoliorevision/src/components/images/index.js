import React from 'react';
import logo from './logo.png'; 
import './index.css';

console.log(logo);

function Header() {

  return <img src={logo} alt="Nutella" />;
}

export default Header;