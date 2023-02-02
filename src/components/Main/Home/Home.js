import React from 'react';
import { Icon } from '@iconify/react';
const Home = () => {
  return (
    <div className='main'>
      <h1 className='main-head'>Get Fit & Get Healthy!</h1>
      <div className='query'>
        <a href=''>
          <h4 className='q-left'> Are you looking for job?</h4>
        </a>
        <a href=''>
          <h4 className='q-right'> Are you looking for an employee?</h4>
        </a>
      </div>
      <div className='arrow-down'>
        <Icon icon='material-symbols:keyboard-arrow-down-rounded' />
      </div>
    </div>
  );
};

export default Home;
