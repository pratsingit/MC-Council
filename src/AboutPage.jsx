import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="fake-header">
        <h1>About Us</h1>
      </div>
      <div className="about-header">
        <h2>Team Members</h2>
      </div>
      <div className="team-list">
        <ul>
          <li>
            <strong>Pratyush Chowdhury</strong>
            <p>PRN: 1032210864 <br /><p></p> Roll No.: 09</p>
          </li>
          <li>
            <strong>Gaurav Mukherjee</strong>
            <p>PRN: 1032211389 <br /><p></p> Roll No.: 18</p>
          </li>
          <li>
            <strong>Aryan <br /> Raina</strong>
            <p>PRN: 1032211722 <br /><p></p> Roll No.: 24</p>
          </li>
        </ul>
      </div>
      <div className="about-footer">
        <p>Copyright © 2023 MC Council</p>
      </div>
      <div className="fake-footer"></div>
    </div>
  );
};

export default AboutPage;
