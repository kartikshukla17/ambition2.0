import React from 'react';

const Card = ({ children }) => {
  // A simple div with a very obvious red border for testing
  return <div style={{ border: '2px solid red', padding: '10px' }}>{children}</div>;
};

export default Card;