<<<<<<< HEAD
import React from 'react';
import { SubHeading} from '../../components'
import { images} from '../../constants'

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding ' id='contact'>
    <div className="app__wrapper_info">
      <SubHeading title='Contact' />
      <h1 className='headtext__cormorant' style={{marginBottom:'3rem'}}>Find Us</h1>
      <div className="app__wrapper-content">
      <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>

        <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>

      </div>

    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>

  </div>
);
=======
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './FindUs.css';

const FindUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }, []);

  return (
    <div className='app__bg app__wrapper section__padding' id='contact'>
      <div className="app__wrapper_info">
        <SubHeading title='Contact' />
        <h1 className='headtext__cormorant' data-aos="fade-left">Find Us</h1>
        <div className="app__wrapper-content" data-aos="fade-up">
          <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
          <p className="p__cormorant">Opening Hours</p>
          <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
          <button type="button" className="custom__button">Visit Us</button>
        </div>
      </div>
      <div className="app__wrapper_img" data-aos="fade-right">
        <img src={images.findus} alt="findus" />
      </div>
    </div>
  );
}
>>>>>>> 410c1d9 (Your commit message)

export default FindUs;
