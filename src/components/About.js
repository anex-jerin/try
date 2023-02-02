import React from 'react';
import about2 from '../images/about2.png';
import about3 from '../images/about3.png';
const About = () => {
  return (
    <div className='about'>
      <div className='a-img-main'></div>
      <div className='a-details'>
        <h1>
          About <span className='red'>GCC Recruitment</span>
        </h1>
        <p>
          We are a leading fitness recruitment company based in the UAE. With a
          combined 20 years experience in the health and fitness sector.
        </p>
        <p>
          
          We recruit specialised fitness professionals from all over the world
          to come and join your team here in the GCC.
        </p>
        <p>
          Our extensive experience has granted us the ability to understand the
          intricacies of the fitness industry including but not limited to
          client demands and we are uniquely positioned to meet your demands.
        </p>
        <div className='a-img'>
          <img src={about2} alt='' />
        </div>
      </div>
      <div className='a-service'>
        <div className='as-img'>
          <img src={about3} alt='' />
        </div>
        <div className='as-details'>
          <h1>What <span className='red'>We Do?</span> </h1>
          <p>
            We specialise in matching and placing fitness professionals in
            fitness related roles within the middle east.
          </p>
          <p>
            Our goal is to find the right candidate with the best skills,
            experience and personality to match your facility.
          </p>
          <p>
            We provide services for VIP clients, prestigious boutique gyms and
            fitness studios that are all located in the middle east.
          </p>
          <p>
            As the GCC countries are constantly growing, there is a high demand
            for facilities within the health and fitness industry.
          </p>
          <p>
            Us as the agents are here to save you time and to take the stress
            away, when looking for the right candidate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
