import React, { useState, useEffect } from "react";
import "./index.css";
import arrow from "../../icons/arrow-top-right.svg";
import { Link } from "react-router-dom";
import img3 from "../../img/promo__page_img/Img3.png";
import img3_mobile from "../../img/promo__page_img/Img3_mobile.png";
import ServiceImg1 from "../../img/promo__page_img/Service__img1.png";
import ServiceImg2 from "../../img/promo__page_img/Service__img2.png";
import SecondaryBtn from "../SecondaryBtn/SecondaryBtn";
import PrimaryBtn from "../primaryBtn/PrimaryBtn";
import SliderBtn from "../sliderBtn/SliderBtn";

function Slider({ slidesData }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slidesData.length) % slidesData.length
    );
  };

  return (
    <div className="service__slider">     
      {slidesData.map(
        (slide, index) =>
          currentSlide === index && (
            <div key={slide.id} className="service__slide">
              <img src={slide.img} alt={`Slide ${slide.id}`} />
              <div className="service__slider_content">
                <h2 className="service__slider_header">{slide.header}</h2>
                <p className="service__slider_descr">{slide.descr}</p>
								<SliderBtn />
              </div>
            </div>
          )
      )}
      <button className="service__slider_btn" onClick={nextSlide}>&gt;</button>
    </div>
  );
}

function ServiceSection() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageSource = windowWidth >= 768 ? img3 : img3_mobile;

  const slidesData = [
    {
      id: 1,
      img: ServiceImg1,
      header: "First 10 Exclusive",
      descr:
        "An exclusive opportunity to the first 10 clients who choose any of our packages. Seize the moment and claim a complimentary landing page with your order!",
    },
    {
      id: 2,
      img: ServiceImg2,
      header: "Get your website cost estimate now",
      descr: `Estimating the cost of developing, designing, and optimizing a website can be tricky due to the uniqueness of each project. That's why we provide a free website price calculator to help you gauge the potential cost of your project.`,
    },
  ];

  return (
    <section className="serviceSection">
      {/* Здесь начинается закомментированная часть */}
      {/* <div className="h1">OUR SERVICES</div>
      <div className="service__wrapper">
        <img src={imageSource} alt="Service" className="img3" />
        <div className="service__descr">
          <p className="p1">
            At our company, we cater to businesses of all sizes,
            <span className="mobile-no-break">
              {" "}
              ensuring that both small enterprises and large corporations receive top-notch services. Our dedicated efforts are aimed at fostering the growth and prosperity of your business.
            </span>
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
      </div> */}
      {/* Здесь заканчивается закомментированная часть */}
      <Slider slidesData={slidesData} />
    </section>
  );
}

export default ServiceSection;
