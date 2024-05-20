import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => (
  <header>
    <h1>Lalitha Vadrevu</h1>
    <p>Full Stack Developer | B.S. in Computer Science & Statistics</p>
    <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/experience">Experience</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
  </header>
);

export default Header;