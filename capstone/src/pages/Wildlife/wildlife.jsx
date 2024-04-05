import React from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap'; // Import GSAP
import SouthAmerica from '../South America/southAmerica';
import Navbar from '../../components/NavBar/navbar';
import Cursor from '../../components/Cursor/cursor';

function Wildlife() {
  const waveEffect = (element) => {
    gsap.to(element, {
      scaleY: 1.5,
      yoyo: true,
      repeat: 1,
      duration: 0.25,
      ease: 'power2.out'
    });
  };

  return (
    <div>
      <SouthAmerica />
      <Navbar />
      <Cursor />
    </div>
  );
}

export default Wildlife;
