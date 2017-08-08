import React from 'react';
import './index..css'

const Button = ({ 
  onClick, 
  className, 
  children 
}) =>
  <button
    onClick={onClick}
    className="button-inline"
    type="button"
  >
    {children}
  </button>

export default Button;