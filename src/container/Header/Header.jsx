import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SubHeading } from '../../components';
import images from '../../constants/images';
import './Header.css';

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className="app__wrapper_info" data-aos="fade-up">
        <SubHeading title="Chase the new flavour" />
        <h1 className='app__header-h1' data-aos="fade-up">The Key To Fine Dining</h1>
        <p className='p__opensans' style={{ margin: '2rem 0' }} data-aos="fade-up">
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus.
        </p>
        <button type='button' className='custom__button' data-aos="fade-up">Explore Menu</button>
      </div>

      <div className="app__wrapper_img" data-aos="fade-left">
        <img src={images.welcome} alt="header-img" />
      </div>
    </div>
  );
};

export default Header;

// import React from 'react';

// import {SubHeading} from '../../components'

// import images from '../../constants/images';


// import './Header.css';

// const Header = () => (
//   <div className='app__header app__wrapper section__padding' id='home'>
//     <div className="app__wrapper_info">
//       <SubHeading title ="Chase the new flavour" />
//       <h1 className='app__header-h1'> The Key To Fine Dining</h1>
//       <p className='p__opensans' style= {{margin:'2rem 0'}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
//       <button type='button' className='custom__button'>Explore Menu</button>
//     </div>

//       <div className="app__wrapper_img">
//         <img src={images.welcome} alt="header-img" />
      

//       </div>
    

//   </div>
// );

// export default Header;

