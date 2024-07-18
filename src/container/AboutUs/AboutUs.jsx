import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import images from '../../constants/images';
import './AboutUs.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='Aboutus'>
      <div className="app__aboutus-overlay flex__center" data-aos="fade-right">
        <img src={images.G} alt="g letter" />
      </div>
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about" data-aos="fade-up">
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt="about_spoon" className='spoon__img' />
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <button type="button" className="custom__button">Know More</button>
        </div>

        <div className="app__aboutus-content_knife flex__center" data-aos="zoom-in">
          <img src={images.knife} alt="about_knife" />
        </div>
        <div className="app__aboutus-content_history" data-aos="fade-up">
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt="about_spoon" className='spoon__img' />
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <button type="button" className="custom__button">Know More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
