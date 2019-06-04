import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Carousel from './Carousel';
import Footer from './Footer';

import ThumbnailGallery from './components/thumbnail-gallery/ThumbnailGallery';

function App() {

  return (
    <div className="App">
      <Header />
      <Carousel />
      <Footer />
      <ThumbnailGallery />
    </div>
  );
}

export default App;
