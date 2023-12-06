import React from 'react';
import './index.css';
import SecondaryBtn from '../SecondaryBtn/SecondaryBtn';

function Contact() {
  return (
    <section className="contact">
      <div className="contact__wrapper">
        <div className="contact__title h2">
          Have a question?
        </div>
        <div className="contact__subtitle h2">
          Get in touch
        </div>
        <div className="contact__descr">
					<div>
					We value your feedback, questions, and inquiries. Whether 
					</div>
					<div>
					you have a suggestion, require assistance, or just want to
					</div>
					<div>
					reach out to us, we are always here to provide support and 
					</div>
					<div>
					assistance.
					</div>					 
        </div>
        <div className="contact__icons">
          <div className="contact__icons_phone">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M8 1H20C21.0609 1 22.0783 1.39133 22.8284 2.08789C23.5786 2.78445 24 3.7292 24 4.71429V23.2857C24 24.2708 23.5786 25.2155 22.8284 25.9121C22.0783 26.6087 21.0609 27 20 27H8C6.93913 27 5.92172 26.6087 5.17157 25.9121C4.42143 25.2155 4 24.2708 4 23.2857V4.71429C4 3.7292 4.42143 2.78445 5.17157 2.08789C5.92172 1.39133 6.93913 1 8 1Z" stroke="#12A6C8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14 24.5239C15.0519 24.5239 15.9047 23.6711 15.9047 22.6191C15.9047 21.5671 15.0519 20.7144 14 20.7144C12.948 20.7144 12.0952 21.5671 12.0952 22.6191C12.0952 23.6711 12.948 24.5239 14 24.5239Z" fill="#12A6C8" />
            </svg>
            <h4>+1 506 567 67 77</h4>
          </div>
          <div className="contact__icons_email">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M1 6.66667V21.3333C1 22.3058 1.39133 23.2384 2.08789 23.9261C2.78445 24.6137 3.7292 25 4.71429 25H23.2857C24.2708 25 25.2155 24.6137 25.9121 23.9261C26.6087 23.2384 27 22.3058 27 21.3333V6.66667C27 5.69421 26.6087 4.76158 25.9121 4.07394C25.2155 3.38631 24.2708 3 23.2857 3H4.71429C3.7292 3 2.78445 3.38631 2.08789 4.07394C1.39133 4.76158 1 5.69421 1 6.66667Z" stroke="#12A6C8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4.71429 8.5L14 14L23.2857 8.5" stroke="#12A6C8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h4>example@example.com</h4>
          </div>
        </div>
      </div>
      <div className="contact__form">
        <form action="#" className="contact__feed-form">
          <div className="contact__input">
            <input required name="name" type="text" id="name" placeholder="Your name" className='.input' />
            <label htmlFor="name"></label>
          </div>
          <div className="contact__input">
            <input required name="phone" type="tel" id="phone" placeholder="Phone number" className='.input' />
            <label htmlFor="phone"></label>
          </div>
          <div className="contact__input">
            <input required name="email" type="email" id="email" placeholder="Your email" className='.input'/>
            <label htmlFor="email"></label>
          </div>
          <div className="contact__comment">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M19.695 6.0814L21.2529 7.71036M22.0318 2.00899C22.3388 2.32983 22.5823 2.71076 22.7484 3.13001C22.9145 3.54926 23 3.99863 23 4.45244C23 4.90625 22.9145 5.35561 22.7484 5.77486C22.5823 6.19411 22.3388 6.57504 22.0318 6.89588L7.23165 22.371L1 24L2.55791 17.5754L17.3643 2.01551C17.9479 1.40232 18.7307 1.041 19.5573 1.00328C20.3838 0.96556 21.1937 1.2542 21.8262 1.81189L22.0318 2.00899Z" stroke="#8E93A2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            How can we help you? Feel free to get in touch with us!
          </div>
          <div className="contact__input">
            <textarea name="text" id="text"></textarea>
            <label htmlFor="text"></label>
          </div>
          <div className="contact__triggers">
            <div className="contact__policy">
              <input required type="checkbox" id="myCheckbox" className="checkbox" />
              <label htmlFor="myCheckbox"></label>
              <span className="p2">I agree that my data <a href="#">will be collected and stored.</a></span>
            </div>
						<SecondaryBtn />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
