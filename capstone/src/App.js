import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from '../src/pages/Loading/loading';
import Home from '../src/pages/Home/home';
import Wildlife from '../src/pages/Wildlife/wildlife';
import Services from '../src/pages/Services/services';
import Story from '../src/pages/Story/story';
import Contact from '../src/pages/Contact/contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/loading" element={<Loading />} />
        <Route path="/" element={<Home />} />
        <Route path="/wildlife" element={<Wildlife />} />
        <Route path="/services" element={<Services />} />
        <Route path="/story" element={<Story />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
