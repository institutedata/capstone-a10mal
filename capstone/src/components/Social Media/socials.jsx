import React from 'react';
import '../Social Media/socials.css';
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';
import Twitter from '../../assets/twitter.png';
import Youtube from '../../assets/youtube.png';

export default function Socials() {
  return (
    <div className='icons'>
      <a href="https://www.facebook.com/AKLZOONZ">
        <img src={Facebook} alt="Facebook" />
      </a>
      <a href="https://www.instagram.com/aucklandzoo/">
        <img src={Instagram} alt="Instagram" />
      </a>
      <a href="https://twitter.com/aucklandzoo">
        <img src={Twitter} alt="Twitter" />
      </a>
      <a href="https://www.youtube.com/user/aucklandzoo">
        <img src={Youtube} alt="Youtube" />
      </a>
    </div>
  );
}
