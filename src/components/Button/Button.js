import React from 'react';

function Button({ text = 'Click Me!', onClick = () => {} }) {
  return <button onClick={onClick}>{text}</button>;
}

export default Button;
