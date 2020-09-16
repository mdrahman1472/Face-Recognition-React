import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import { Navigation } from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';

function App() {
  return (
   <div>
      {/* <Particles
         params={{
            "particles": {
               "number": {
                  "value": 150
               },
               "size": {
                  "value": 3
               }
            },
            "interactivity": {
               "events": {
                  "onhover": {
                        "enable": true,
                        "mode": "repulse"
                  }
               }
            }
         }} /> */}
      
      <Navigation />
      <Logo />
   </div>
  );
}

export default App;
