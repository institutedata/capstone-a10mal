import React from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap'; // Import GSAP
import SouthAmerica from '../South America/southAmerica';

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
      <div>
        <div id="wildlife_main_menu">
          <div className="wildlife_logo_area">
            <Link to="/" className="wildlife_logo_link">
              <h1 className="logo_text">Auckland Zoo</h1>
            </Link>
            <Link to="/" className="wildlife_logo_link">
              <h2 className="wildlife_logo_subtitle">Education</h2>
            </Link>
          </div>
          <div className="wildlife_inner_main_menu">
            <ul>
              <li><Link to="/wildlife" onMouseEnter={(e) => waveEffect(e.target)} onMouseLeave={(e) => gsap.set(e.target, { scaleY: 1 })}>Wildlife</Link></li>
              <li><Link to="/services" onMouseEnter={(e) => waveEffect(e.target)} onMouseLeave={(e) => gsap.set(e.target, { scaleY: 1 })}>Services</Link></li>
              <li><Link to="/story" onMouseEnter={(e) => waveEffect(e.target)} onMouseLeave={(e) => gsap.set(e.target, { scaleY: 1 })}>Our Story</Link></li>
              <li><Link to="/cam" onMouseEnter={(e) => waveEffect(e.target)} onMouseLeave={(e) => gsap.set(e.target, { scaleY: 1 })}>Animal Cam</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wildlife;
