import React, { useState, useRef } from 'react';
import '../Rainforest/rainforest.css';
import Navbar from '../../components/NavBar/navbar';
import img1 from '../../assets/api_pics/alligator.jpg';
import img2 from '../../assets/api_pics/cottontop_tamarin.jpg';
import img3 from '../../assets/api_pics/emperortamarin.jpg';
import img4 from '../../assets/api_pics/galapagostortoise.jpg';
import img5 from '../../assets/api_pics/goldenlion_tamarin.jpg';
import img6 from '../../assets/api_pics/greeniguana.jpg';
import img7 from '../../assets/api_pics/sMonkey.jpg';
import img8 from '../../assets/api_pics/squirrelmonkey.jpg';
import img9 from '../../assets/api_pics/tarantula.jpg';

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9
];

const SplitScreenSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef(null);

  const handleSliderChange = (index) => {
    setCurrentIndex(index);
  };

  const handleScroll = (event) => {
    if (isScrolling) return;

    if (event.deltaY > 0) {
      // Scroll down
      setIsScrolling(true);
      setCurrentIndex(prevIndex =>
        prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (event.deltaY < 0) {
      // Scroll up
      setIsScrolling(true);
      setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    }

    // Set a timeout to reset the scrolling flag after a short delay
    clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      setIsScrolling(false);
    }, 2000); // Adjust the delay as needed
  };

  return (
    <div className="split-screen-slider" onWheel={handleScroll}>
      <div className="split-screen-slider-inner">
        <div
          className="split-screen-slider-image"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        ></div>
        <div className="split-screen-slider-controls">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleSliderChange(index)}
              className={currentIndex === index ? 'active' : ''}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SplitScreenSlider;
