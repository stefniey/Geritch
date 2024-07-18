import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='app__specialMenu flex__center section__padding' id='menu'>
      <div className="app__specialMenu-title" data-aos="fade-down">
        <SubHeading title="Menu that fits your pallet" />
        <h1 className='headtext__cormorant'>Today's Special</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center" data-aos="fade-right">
          <p className='app__specialMenu-menu_heading'>Wine & beer</p>
          <div className="app__specialMenu-menu_items">
            {data.wines.map((wine, index) => (
              <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
          </div>
        </div>
        <div className="app__specialMenu-menu_img" data-aos="fade-up">
          <img src={images.menu} alt="menu-img" />
        </div>
        <div className="app__specialMenu-menu_cocktails flex__center" data-aos="fade-left">
          <p className='app__specialMenu-menu_heading'>Cocktails</p>
          <div className="app__specialMenu-menu_items">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: '15px' }} data-aos="fade-up">
        <button type='button' className='custom__button'>View More</button>
      </div>
    </div>
  );
};

export default SpecialMenu;

