import React, { useState, useEffect } from 'react';
import "./index.css";
import PrimaryBtn from "../primaryBtn/PrimaryBtn";
import ContactWindow from '../contactWindow/ContactWindow';
import img1_mobile from '../../img/promo__page_img/Group_mobile.png';
import img1 from '../../img/promo__page_img/Group.png';
import animation__promo from '../../img/animation__promo.gif';

function PromoSection() {
  const [isContactWindowVisible, setContactWindowVisibility] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleContactBtnClick = () => {
    setContactWindowVisibility(true);
  };

  const handleContactWindowClose = () => {
    setContactWindowVisibility(false);
  };

  const imageSource = windowWidth >= 425 ? img1 : img1_mobile; 

  return (
    <div className="promo">
      <div className="promo__wrapper">
        <img src={imageSource} alt="Promo" className="img1" />
        <h1 className="h1 promo__header">
          <span className="promo__title">TRANSFORM YOUR</span>
          <span className="promo__title">BUSSINESS WITH</span>
          <span className="promo__title">ARTIFICIAL INTELLIGENCE</span>
        </h1>
        <p className="promo__descr p1">
          More profit, less worry. We can help you to provide comprehensive branding services including brand identity development.
        </p>
      </div>
      <PrimaryBtn className="promo__btn" onClick={handleContactBtnClick} />
      {isContactWindowVisible && <ContactWindow onClose={handleContactWindowClose} />}
    </div>
  );
}

export default PromoSection;
