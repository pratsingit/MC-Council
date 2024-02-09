import React from 'react';
import './Marquee.css';
import placeholderImage1 from './placeholder1.jpg'; 
import placeholderImage2 from './placeholder2.jpg';
/* import placeholderImage3 from './placeholder3.jpg'; */
import placeholderImage4 from './placeholder4.jpg';
import placeholderImage5 from './placeholder5.jpg';
import placeholderImage6 from './placeholder6.jpg'; 

const Marquee = () => {
  return (
    <div className="marquee-container">
      <p>OUR STUDENTS ARE CERTIFIED PROFESSIONALS IN: </p>
      <div className="marquee-images">
        <img src={placeholderImage1} alt="Placeholder 1" />
        <img src={placeholderImage2} alt="Placeholder 2" />
        <img src={placeholderImage6} alt="Placeholder 6" />
        <img src={placeholderImage4} alt="Placeholder 4" />
        <img src={placeholderImage5} alt="Placeholder 5" />
        {/* <img src={placeholderImage6} alt="Placeholder 6" /> */} 
      </div>
    </div>
  );
};

export default Marquee;
