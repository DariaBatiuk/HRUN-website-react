import React from 'react'
import './index.css';
import popUpImg from '../../img/promo__page_img/PopUp.png';
import miniCross from "../../icons/miniCross.svg";
import PopUpBtn from '../popUpBtn/PopUpBtn';

const PopUp = ({onClose}) => {
	return (
		<div className='popup'>
        <img src={miniCross} alt="popup__cross" className="popup__cross" />
				<div className='popup__wrapper'>
				<img src={popUpImg} alt="popup__img" className="popup__img" />
				<div className='popup__content'>
					<div className='popup__header'>Unlock Your Web Wisdom!</div>
					<div className='popup__descr'>Take Our Quick Quiz and Discover How Well You Know Our Company and Services. Ready to Dive In?</div>
					<PopUpBtn />
				</div>
				</div>
        
		</div>
	)
}

export default PopUp;
