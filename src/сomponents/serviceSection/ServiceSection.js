import React, { useState, useEffect } from "react";
import "./index.css";
import arrow from "../../icons/arrow-top-right.svg";
import { Link } from "react-router-dom";
import img3 from '../../img/promo__page_img/Img3.png';
import img3_mobile from '../../img/promo__page_img/Img3_mobile.png';

function ServiceSection() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imageSource = windowWidth >= 768 ? img3 : img3_mobile; // предполагаем, что 768px - это пороговое значение для мобильных устройств

  return (
    <section className="serviceSection">
      <div className="h1">OUR SERVICES</div>
      <div className="service__wrapper">
			<img src={imageSource} alt="Service" className="img3" />
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
						Basic Package
              <img src={arrow} alt="arrow" className="arrow" />
            </Link>
            <Link className="h2 service__list" to="/services">
						Standard Package
              <img src={arrow} alt="arrow" className="arrow" />
            </Link>
            <Link className="h2 service__list" to="/services">
						Premium Package
              <img src={arrow} alt="arrow" className="arrow" />
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;

