import image1 from './image/Rectangle1.png';
import image2 from './image/Rectangle 2.png';
import image3 from './image/Rectangle 3.png';

const Apply = () => {
  const text =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, aperiam quaerat! Rem, optio. Facere, debitis? ';
  return (
    <div className='apply'>
      <h2>Apply with us for promising fitness jobs</h2>
      <div className='show'>
        <div className='grid'>
          <img src={image1} alt='' />
          <div className='g-btn'>
            <h6>{text} </h6>
            <button>more..</button>
          </div>
        </div>
        <div className='grid'>
          <img src={image2} alt='' />
          <div className='g-btn'>
            <h6>{text} </h6>
            <button>more..</button>
          </div>
        </div>
        <div className='grid'>
          <img src={image3} alt='' />
          <div className='g-btn'>
            <h6>{text} </h6>
            <button>more..</button>
          </div>
        </div>
      </div>
      <div>
        <button className='v-btn'>View more</button>
      </div>
    </div>
  );
};

export default Apply;
