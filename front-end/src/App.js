import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import { Navigation } from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

function App() {
  return (
   <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
   </div>
  );
}

export default App;
