import React from 'react';

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div className="project">
      <h3>UNC CSXL Roster Management System</h3>
      <li>Contributed to the development of the UNC CSXL (Computer Science Experience Lab) web app, serving a weekly audience of over 300 visitors.</li>
      <li>Developed pivotal feature that allows students and faculty to have a roster management system to incorporate membership and leadership representation for student organizations, enabling exclusive functionalities like members-only events and administrative privileges to manage member information.</li>
      <li>Utilized Angular and TypeScript to enhance the frontend, seamlessly integrating it with a Python-powered backend built with FastAPI and PostgreSQL.</li>
      <li>Employed Python's RESTful server-side APIs for membership management CRUD operations, integrated with PostgreSQL, and conducted unit tests to ensure functionality. Implemented SQLAlchemy ORM for optimized data deployment on CloudApps.</li>
      <a href="https://csxl-team-a3-comp590-24s.apps.unc.edu" target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
    <div className="project">
      <h3>Track My Leader</h3>
      <li>Developed a data-driven web app using HTML/CSS, Python, and Flask, enabling web scraping and analysis of governmental data for tracking past presidents' platforms and achievements alongside North Carolina officials.</li>
      <li>Integrated data visualization tools and the Twilio API to provide personalized voter registration information, enhancing civic engagement and accessibility to political data.</li>
      <a href="https://devpost.com/software/track-my-leader" target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
   
  </section>
);

export default Projects;
