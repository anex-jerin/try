import React, { useState } from 'react';
import Hamburger from './images/Hamburger';
import Gcc from './images/gcc.png';
import { Icon } from '@iconify/react';

const Navbar = () => {
  const [hamState, setHamState] = useState(true);
  return (
    <div className='navbar'>
      <div className='left-side' onClick={() => setHamState(false)}>
        <Hamburger />
        <h1 className='left-h'>Career Menu</h1>
      </div>
      <a href='/home' className='logo'>
        <img src={Gcc} alt='logo' />
      </a>
      <a href='tel:+971 50 721 9263' className='m-phone'>
        <Icon icon='ic:baseline-phone' />
      </a>
      <div className='right-side'>
        <a href='tel:+971 50 721 9263' className='phone'>
          <Icon icon='ic:baseline-phone' />
          +971 50 721 9263
        </a>
        <div className='social'>
          <a href=''>
            <Icon className='n-ico' icon='uil:facebook-f' />
          </a>
          <a href=''>
            <Icon className='n-ico' icon='ph:instagram-logo-fill' />
          </a>
          <a href=''>
            <Icon className='n-ico' icon='mdi:linkedin' />
          </a>
          <a href=''>
            <Icon className='n-ico' icon='mdi:twitter' />
          </a>
        </div>
      </div>
      <div className={`${hamState ? 'hide' : 'ham-menu'}`}>
        <Icon
          className='close'
          icon='ic:round-close'
          onClick={() => setHamState(true)}
        />
        <div className='menus'>
          <a href='/home' onClick={() => setHamState(true)}>
            Home
          </a>
          <a href='/about' onClick={() => setHamState(true)}>
            About
          </a>
          <a href='/employee' onClick={() => setHamState(true)}>
            Employee
          </a>
          <a href='#contacts' onClick={() => setHamState(true)}>
            Contacts
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
