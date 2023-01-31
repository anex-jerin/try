import React from 'react';
import logo from './logo.png';
import insta from './insta.png';
import link from './link.png';
import face from './face.png';
import twit from './twit.png';

const Footer = () => {
  return (
    <div className='footer'>
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
            <img src={insta} alt='' />
          </a>
          <a href=''>
            <img src={link} alt='' />
          </a>
          <a href=''>
            <img src={face} alt='' />
          </a>
          <a href=''>
            <img src={twit} alt='' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
