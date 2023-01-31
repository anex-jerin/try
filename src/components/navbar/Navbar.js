import React from 'react';
import Hamburger from './svg/Hamburger';
import Logo from './svg/Logo';
import phone from './svg/phone.png'
const Navbar = () => {
  return (
    <div>
      <div className='left-side'>
        <h1>
          <Hamburger />
          Career Menu
        </h1>
      </div>
      <div className='right-side'>
        <Logo/>
      </div>
    </div>
  );
};

export default Navbar;
