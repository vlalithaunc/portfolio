import React from 'react';
import myPic from '../images/my-pic.png';

const About = () => (
  <section id="about">
    <h2>About Me</h2>
    <p>Hi! My name is Lalitha Vadrevu. I am currently pursuing a double major in Computer Science and Statistics & Analytics at University of North Carolina at Chapel-Hill. Over the past two summers, I've had the privilege of gaining an immense amount of knowledge through my Full Stack Development internship at Financial Risk Group (FRG). I am excited to apply the new skills I've learned in my future roles. At the moment, I am actively searching for full-time opportunities in software development and full-stack development.</p>
    <div>
      <img className="image-wrapper" src={myPic} alt="Lalitha Vadrevu" style={{ width: '200px' }} />
    </div>
  </section>
  
);

export default About;