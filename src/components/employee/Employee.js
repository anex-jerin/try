import React from 'react';

const Employee = () => {
  return (
    <div className='employee' id='employee'>
      <div className='photo-div'>
        <div className='img-text'>
          <h1>
            Are you looking for an <span className='red'>employee?</span>{' '}
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsam
            dolor repellat corrupti doloremque iusto corporis ratione earum
            possimus quam voluptate dicta doloribus exercitationem architecto
            nobis quis excepturi, neque ex?
          </p>
          <button className='p-btn'>Reach Out to us</button>
        </div>
      </div>
    </div>
  );
};

export default Employee;
