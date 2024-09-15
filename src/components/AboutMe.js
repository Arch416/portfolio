import React from 'react';
import profileImage from '../assets/pic.jpeg';

function AboutMe() {
  return (
    <section>
      <h2>About Me</h2>
      <img src={profileImage} alt="Profile" style={{ width: '150px', borderRadius: '50%' }} />
      <p>Hello! I am a web developer with a passion for creating beautiful and functional websites.</p>
    </section>
  );
}

export default AboutMe;
