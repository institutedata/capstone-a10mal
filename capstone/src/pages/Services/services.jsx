import React from 'react';
import Card from '../../components/Card/card';
import { projects } from './data';
import styles from './services.modules.css';
import Navbar from '../../components/NavBar/navbar';

function Projects() {
  return (
    <div>
      <Navbar />
    <div className={styles.main}>
      {projects.map((project, index) => (
        <Card
          key={index}
          i={index}
          {...project}
        />
      ))}
    
    </div>
    </div>
  );
}

export default Projects;
