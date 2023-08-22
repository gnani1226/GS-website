import React from 'react';
import './Reactcard.css'


const Reactcard = (props) => {
    const {gnani} = props;
  return (
    <li className="link-card">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <h1>Get Started</h1>
      </a>
    </li>

  );
};

export default Reactcard;
