import React from "react";
import "./index.css";
import arrow from "../../icons/arrow-top-right.svg";
import { Link } from "react-router-dom";

function ServiceSection() {
  return (
    <section className="serviceSection">
      <div className="h1">OUR SERVICES</div>
      <div className="service__wrapper">
        Image
        <div className="service__descr">
          <p className="p1">
            At our company, we cater to businesses of all sizes,
            <span className="mobile-no-break p1">
              {" "}
              ensuring that both small enterprises and large
							{" "}
            </span>
             corporations receive top-notch services. Our dedicated
            <span className="mobile-no-break p1">
              {" "}
              efforts are aimed at fostering the growth and prosperity of
							{" "}
            </span>
            your business.
          </p>

          <ul className="service__offers">
            <Link className="h2 service__list" to="/services">
              Small Businesses
              <img src={arrow} alt="arrow" className="arrow" />
            </Link>
            <Link className="h2 service__list" to="/services">
              Medium Businesses
              <img src={arrow} alt="arrow" className="arrow" />
            </Link>
            <Link className="h2 service__list" to="/services">
              Large Businesses
              <img src={arrow} alt="arrow" className="arrow" />
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
