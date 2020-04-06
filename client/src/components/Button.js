import React from 'react';

const Button = ({ handler, label, wrapClass }) => (
  <div className={wrapClass || 'button-wrap'}>
    <button onClick={handler}>{label}</button>
  </div>
);

export default Button;
