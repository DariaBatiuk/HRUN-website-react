import React from 'react';
import "./index.css";
import PrimaryBtn from "../primaryBtn/PrimaryBtn";

function PromoSection() {
  return (
    <div className="promo">
      <div className="promo__wrapper">
        <h1 className="h1">
          <span className="promo__title">We are here</span>
          <span className="promo__title">to guide you</span>
          <span className="promo__title">towards success</span>
        </h1>
        <p className="promo__descr p1">
          We can help you to provide comprehensive branding services including
          brand identity development.
        </p>
      </div>
      <PrimaryBtn className="promo__btn" />
    </div>
  );
}

export default PromoSection;
