import React, { useState } from 'react';
import "./index.css";
import PrimaryBtn from "../primaryBtn/PrimaryBtn";
import ContactWindow from '../contactWindow/ContactWindow';
import img1_mobile from '../../img/promo__page_img/Group_mobile.png';
import img1 from '../../img/promo__page_img/Group.png';
import img3 from '../../img/promo__page_img/Img3.png';


function PromoSection() {
	const [isContactWindowVisible, setContactWindowVisibility] = useState(false);

	const handleContactBtnClick = () => {
    setContactWindowVisibility(true);
  };

  const handleContactWindowClose = () => {
    setContactWindowVisibility(false);
  };

  return (
    <div className="promo">
      <div className="promo__wrapper">
			<img src={img1_mobile} alt={img1_mobile} className="img1" />
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
