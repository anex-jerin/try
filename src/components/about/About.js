import React from 'react';
import image from './image2.jpg'

function About() {
  return (
    <div className='about' id='about'>
      <div className='a-left'>
        <h1 className='a-head'>About <span className='red'>GCC Recruitment</span> </h1>
        <p>
          We are a leading fitness recruitment company based in the UAE. With a
          combined 20 years experience in the health and fitness sector.
        </p>
        <p>
          We recruit specialized fitness professionals from all over the world
          to come and join your team here in the GCC.
        </p>
        <button className='a-btn'>View more</button>
      </div>
      <img src={image} alt="workout2" height='auto' width='500px' />
    </div>
  );
}

export default About;
