import React from 'react';
import Header from './Header';
import NavBar from './Navigation';
import Body from './Body';
import About from './About';
import More from './More';
import Spotify from './Spotify';
import { HashRouter as Router } from "react-router-dom";




function App() {
  return (
    <Router>
      <Header />
      <NavBar />
      <Body />
      <About id={`about`} />
      <More id={`more`} />
      <Spotify id={`spotify`} />
    </Router>
  );
}

export default App;
