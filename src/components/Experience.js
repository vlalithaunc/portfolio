import React from 'react';

const Experience = () => (
  <section id="experience">
    <h2>Experience</h2>
    <div className="job">
      <h3>Full Stack Developer Intern</h3>
      <p><strong>Financial Risk Group (FRG)</strong> - Cary, NC</p>
      <p>May 2023 - Aug 2023</p>
      <ul>
        <li>Developed and tested a Go module for correlated multivariate simulation using Cholesky Factorization, enhancing risk analysis capabilities, and reducing overall computation time by 20%.</li>
        <li>Implemented 11 new SQL functions in Go, involving the modification of over 500 lines of the SQL parser and code generation routines. Subsequently, created nearly 25 unit tests for better code coverage and updated documentation.</li>
        <li>Enhanced features of an interactive graphical representation of a risk solution process and associate data hierarchy. </li>
        <li>Employed a range of software tools, such as Git, Phabricator (conducted over 15 code reviews), Docker, Markdown, and shell scripts (Linux), for efficient development and project management.</li>
      </ul>
    </div>
    <div className="job">
      <h3>Full Stack Developer Intern</h3>
      <p><strong>Financial Risk Group (FRG)</strong> - Cary, NC</p>
      <p>May 2022 - Aug 2022</p>
      <ul>
        <li>Automated creation of interactive visual representations of risk solution processes by developing a Go subsystem with <b>Graph Theory and Dot language</b>. Collaborated with UI/UX teams to seamlessly integrate code into front-end Django framework, improving overall user experience.</li>
        <li>Analyzed critical Python processes, modified code to enhance parallel performance metrics, resulting in a substantial 20% reduction in the runtime of specific resource-intensive statistical calculations.</li>
        <li>Enhanced Visualization of Risk (VOR) Stream product usability in Python, leading to improved ease of use and client satisfaction.</li>
        <li>Performed code reviews and triaged 15 critical bugs with engineers in an Agile environment. Updated product documentation for future reference and to facilitate knowledge sharing within the team.</li>
      </ul>
    </div>
  </section>
);

export default Experience;
