import React from 'react';
import { Link } from 'react-router-dom';

const Education = () => {
  return (
    <div className='container educationContainer'>
      <h1>Education</h1>
      <h3>University of Puerto Rico-Mayaguez Campus</h3>
      <h4>
        BS in Computer Engineering​ , Minor in Mathematics
        <span>(112/167 credits completed)</span>
      </h4>
      <hr />
      <p>
        ● <span className='progHL'> Program Highlights:</span> ​ Completed
        coursework includes:
      </p>
      <ul>
        <li>○ Algorithms</li>
        <li>○ Engineering</li>
        <li>○​ ​Advanced Programming</li>
        <li>○​ Data Structures and Algorithms</li>
        <li>○​ Calculus</li>
        <li>○​ Physics</li>
      </ul>
    </div>
  );
};

export default Education;
