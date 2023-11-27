import React from 'react';
import '../../responsive.css';
import './index.css';
import logo from '../../icons/Logo.png';
import PrimaryBtn from '../primaryBtn/PrimaryBtn';
import NavMenu from '../navMenu/NavMenu';
import { Link } from 'react-router-dom'; // Импорт Link из react-router-dom

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className="promo__logo">			
        {/* Используем Link для перехода на домашнюю страницу */}
        <Link to="/">
          <img src={logo} alt="Home" className='logo'/>
        </Link>
      </div>

      <NavMenu />
      
      <PrimaryBtn  />
    </nav>
  );
}

export default Navbar;


