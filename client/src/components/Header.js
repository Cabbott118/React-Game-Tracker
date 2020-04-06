import React from 'react';

const Header = ({ title }) => (
  <div className='header'>
    <h1 align='center' className='header__title'>
      {title}
    </h1>
  </div>
);

export default Header;
