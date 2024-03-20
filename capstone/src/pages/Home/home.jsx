import React, { useEffect } from 'react';
import audioBg from '../../assets/audioBg.mp3';

export default function Home() {
  useEffect(() => {
    const audio = new Audio(audioBg);
    audio.play();
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return <div>home</div>;
}
