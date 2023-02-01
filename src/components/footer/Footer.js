import React from 'react';
import logo from './logo.png';
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <div className='footer' id='contacts'>
      <div className='contacts'>
        <div className='c-first'>
          <a href=''>Home</a>
          <a href=''>About Us</a>
          <a href=''>Contact Us</a>
        </div>
        <a href=''> Are you looking for an employee?</a>
        <a href=''>Are you looking for job?</a>
      </div>
      <div className='f-logo'>
        <img src={logo} alt='' />
      </div>
      <div className='f-address'>
        <h3>Claire Turner</h3>
        <h6>C10 canal view, Al dana, Al Raha beach, Abi dhabi</h6>
      </div>
      <div className='f-contacts'>
        <a href='mailto:clairemt87@gmail.com'>clairemt87@gmail.com</a>
        <h6>+971 50 721 9263</h6>
        <div className='f-social'>
          <a href=''>
            <Icon className='f-ico' icon='uil:facebook-f' />
          </a>
          <a href=''>
            <Icon className='f-ico' icon='ph:instagram-logo-fill' />
          </a>
          <a href=''>
            <Icon className='f-ico' icon='mdi:linkedin' />
          </a>
          <a href=''>
            <Icon className='f-ico' icon='mdi:twitter' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
