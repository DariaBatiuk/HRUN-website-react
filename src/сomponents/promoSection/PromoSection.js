import React from 'react';
import "./index.css";
import PrimaryBtn from "../primaryBtn/PrimaryBtn";
import Promo__animation from '../../../public/animations/Promo__animation';

function PromoSection() {
  return (
    <div className="promo">
      <div className="promo__wrapper">
        <h1 className="h1">
          <span className="promo__title">TRANSFORM YOUR</span>
          <span className="promo__title">BUSSINESS WITH</span>
          <span className="promo__title">ARTIFICIAL INTELLIGENCE</span>
        </h1>
        <p className="promo__descr p1">
				More profit, less worry. We can help you to provide comprehensive branding services including brand identity development.
        </p>
				<div className='promo__animation'>
					<Promo__animation />
				</div>
      </div>
      <PrimaryBtn className="promo__btn" />
    </div>
  );
}

export default PromoSection;
