import React, { useState, useEffect } from "react";
import "./index.css";
import { Link, useLocation } from "react-router-dom"; // Импортируем useLocation

function NavMenu() {
  const location = useLocation(); // Получаем текущий маршрут
  const [sliderValue, setSliderValue] = useState(1); // Состояние для значения слайдера
 

  // Функция для обновления положения слайдера
  const updateSliderPosition = (path) => {
    switch (path) {
      case "/":
        return 1;
      case "/services":
        return 2;
      case "/about":
        return 3;
      case "/work":
        return 4;
      default:
        return 1;
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Обновляем положение слайдера при изменении маршрута
  useEffect(() => {
    setSliderValue(updateSliderPosition(location.pathname));
  }, [location]);

  return (
    <div className="promo__menu">
      <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M1.875 5.625C1.875 4.93464 2.43464 4.375 3.125 4.375H26.875C27.5654 4.375 28.125 4.93464 28.125 5.625C28.125 6.31536 27.5654 6.875 26.875 6.875H3.125C2.43464 6.875 1.875 6.31536 1.875 5.625Z" fill="#182963"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M1.875 15C1.875 14.3096 2.43464 13.75 3.125 13.75H26.875C27.5654 13.75 28.125 14.3096 28.125 15C28.125 15.6904 27.5654 16.25 26.875 16.25H3.125C2.43464 16.25 1.875 15.6904 1.875 15Z" fill="#182963"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M1.875 24.375C1.875 23.6846 2.43464 23.125 3.125 23.125H26.875C27.5654 23.125 28.125 23.6846 28.125 24.375C28.125 25.0654 27.5654 25.625 26.875 25.625H3.125C2.43464 25.625 1.875 25.0654 1.875 24.375Z" fill="#182963"/>
        </svg>
      </button>

      <ul className={`promo__list ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" className="promo__link p1">
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" className="promo__link p1">
            Services
          </Link>
        </li>
        <li>
          <Link to="/about" className="p1 promo__link">
            About us
          </Link>
        </li>
        <li>
          <Link to="/work" className="p1 promo__link">
            Our work
          </Link>
        </li>
      </ul>
      <div className="slidecontainer">
        <input
          type="range"
          min="1"
          max="4"
          value={sliderValue} // Значение слайдера берется из состояния
          className="slider"
          id="myRange"
          readOnly // Слайдер только для отображения, не для взаимодействия
        />
        <div className="slider-points">
          <div className="slider-point"></div>
          <div className="slider-point"></div>
          <div className="slider-point"></div>
          <div className="slider-point"></div>
        </div>
      </div>
    </div>
  );
}

export default NavMenu;
