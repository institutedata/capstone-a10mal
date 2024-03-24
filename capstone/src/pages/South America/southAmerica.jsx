import React, { useEffect } from 'react';
import '../South America/southAmerica.css'; 
import monkeyImg from '../../assets/tamarin.png';

export default function SouthAmerica() {
  useEffect(() => {
    // Add the class to the body element when the component mounts
    document.body.classList.add('page-background');

    // Remove the class from the body element when the component unmounts
    return () => {
      document.body.classList.remove('page-background');
    };
  }, []);

  return (
    <div className="container">
      <div className="monkey-container">
        <img src={monkeyImg} alt="Monkey" className="monkey" />
      </div>
      <div className="header-container">
        <h1 className='south-america-header'>South America Rainforest</h1>
      </div>
      <div className="content-container">
        <p className='south-america-subtitle'>Explore the rich biodiversity of the rainforest.</p>
        <button className='south-america-button'>Learn More</button>
      </div>
    </div>
  );
}
