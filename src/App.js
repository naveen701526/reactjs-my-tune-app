import React from 'react';
import './loader.js';
import Nav from './components/Nav';
import ShowCase from './components/ShowCase';
import Music from './components/Music';
import Video from './components/Video';
import Entertainment from './components/Entertainment';
import GiftCard from './components/GiftCard';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
      <Router>
        <div id='showcase'>
          <Nav />
          <ShowCase />
        </div>
        <Music />
        <Video />
        <Entertainment />
        <GiftCard />
        <Footer />
      </Router>
    </>
  );
};

export default App;
