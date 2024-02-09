import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from './logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <img src={logoImage} alt="MC Council Logo" style={{ width: '400px', height: 'auto' }} /></div>
      <div className="hovered-rectangle"></div>
      <nav className="navbar">
        <button className="nav-button" id="trainCertifyBtn">
          Train & Certify
          <div className="dropdown-content">
            
            <Link to="/videofile">
            <button className="newnav-button">Ethical Hacking</button>
            </Link>
            <a href="https://youtube.com/playlist?list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI&si=tZb4dmdFXpijO4XP">Artificial Intelligence</a>
            <a href="https://youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n&si=mBlAhvzlhpx-3oI0">Web Development</a>
          </div>
        </button>
        <button className="nav-button">Security Awareness
          <div className="dropdown-content">
            
            <a href="https://www.cybercrime.gov.in/pdf/Cyber%20Security%20Awareness%20Booklet%20for%20Citizens.pdf">Awareness Resource Part 1</a>
            <a href="https://www.jiit.ac.in/sites/default/files/Cyber%20Security%20Awareness%20Hand%20Book.pdf">Awareness Resource Part 2</a>
            <a href="https://mowr.nic.in/core/Circulars/2022/e-Gov_21-09-2022_14.pdf">Awareness Resource Part 3</a>
          </div>
        </button>
        <button className="nav-button">
          <Link to="/about">
          <button className="nav-button">About</button>
          </Link>
        </button>

        <button className="nav-button"> 
          <button className="action-button">TEST YOURSELF!</button>
            <div className="dropdown-content">
                
                <Link to="/ethicalhacking">
                  <button className="newnav-button">Ethical Hacking</button>
                </Link> 
                <Link to="/artificialint">
                  <button className="newnav-button">Artificial Intelligence</button>
                </Link>
                <Link to="/webdev">
                  <button className="newnav-button">Web Development</button>
                </Link>

                
            </div>
          
        </button>
      </nav>
      
      
      <div className="actions">
        <Link to="/LoginForm">
        <button className="action-button">Log Out</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
