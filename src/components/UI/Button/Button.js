// Button.js
import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <button className={`button ${!props.isvalid ? 'invalid' : ''}`} type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
