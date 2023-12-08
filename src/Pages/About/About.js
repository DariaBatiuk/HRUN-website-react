import React from "react";
import "./index.css";
import PropTypes from "prop-types"; // Добавлен импорт PropTypes
import arrow from "../../icons/arrow-small.svg";
import PrimaryBtn from '../../сomponents/primaryBtn/PrimaryBtn';
import Valerii from '../../img/Valerii.jpg';
import Paul from '../../img/Paul.jpg';
import Daria from '../../img/Daria.jpg';
import KAte from '../../img/Kate.png';


// Компонент для заголовка раздела
const SectionHeader = ({ title }) => (
  <div className="sectionHeader">
    <h1 className="h1 about__header">
      {title.split(" ").map((word, idx) =>
        idx === title.split(" ").length - 2 ? (
          <>
            <br />
            {word}
          </>
        ) : (
          `${word} `
        )
      )}
    </h1>
  </div>
);

// Компонент для блока ценностей компании
const ValueBlock = ({ title, description, img, animation }) => (
  <div className="valueBlock" style={{ animation: animation }}>
    <div className="value__title__wrapper">
      <h3 className="h3 value__title">{title}</h3>
      <img src={img} alt={title} className="valueImage" />
    </div>
    <p className="p1">{description}</p>
    <div>Animation</div>
  </div>
);

// Добавление PropTypes для новых пропсов
ValueBlock.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string, // Не обязательный пропс, так как может быть не у всех ValueBlock
  animation: PropTypes.string, // Также не обязательный пропс
};

// Компонент для отдельного члена команды
const TeamMember = ({ name, position, imageSrc }) => (
  <div className="teamMember">
    {/* Исправлено: использование тега img для изображения */}
    <img src={imageSrc} alt="" className="team__img" />
    <h3 className="h3">{name}</h3>
    <p className="p1 teamMember_position">{position}</p>
  </div>
);

// PropTypes для TeamMember
TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

// Главный компонент страницы About
const About = () => (
  <div className="about">
    <div className="about__title">
      <SectionHeader title="WHY WE ARE THE BEST ?" />
      <div className="about__descr p1">
        We are first company in Moncton offering comprehensive web and mobile
        development services with a focus on WEB3 technology. Our team consists
        of dedicated professionals who specialize in empowering startups and
        local campaigns to achieve growth through the internet.
      </div>
      <div className="about__subtitle p2">
        If your business is not on the Internet, then your business will be out
        of business.
        <span className="about__name">Bill Gates</span>
      </div>
    </div>
		<PrimaryBtn className="mobile-only-btn" />

    <div className="about__values">
      <div className="h1">VALUES AND VISION</div>
      {/* Здесь предполагается, что у вас есть данные для этих компонентов */}
      <div className="values__wrapper">
        <ValueBlock
          title="Quality"
          description="We deliver high-quality digital solutions, websites, and apps that meet industry standards and provide value to clients."
          img={arrow} // Здесь предполагается использование изображения стрелки
          animation="bounce 2s infinite" // Пример CSS анимации
        />
        <ValueBlock
          title="Efficiency"
          description="We deeply engage with our clients' business objectives, providing solutions that yield optimal results."
          img={arrow} // Здесь предполагается использование изображения стрелки
          animation="bounce 2s infinite" // Пример CSS анимации
        />
        <ValueBlock
          title="Innovation"
          description="We promote continuous innovation, empowering employees to explore new ideas and technologies to meet client needs."
          img={arrow} // Здесь предполагается использование изображения стрелки
          animation="bounce 2s infinite" // Пример CSS анимации
        />
      </div>
    </div>

    <div className="about__team">
      <div className="h1">OUR TEAM</div>
      <div className="team__descr p1">
        HRUN is a dynamic and rapidly expanding team of professionals united by
        innovative ideas and a diverse vision.
      </div>

      <div className="team__section">
        {/* Предполагается, что данные членов команды будут переданы здесь */}
        <TeamMember name="Valerii Kryshtal" position="CEO" imageSrc={Valerii}/>
        <TeamMember name="Paul Savage" position="Co-Founder" imageSrc={Paul} />
        <TeamMember name="Daria Batiuk" position="Frontend Developer" imageSrc={Daria}/>
				<TeamMember name="Kate Kovalenko" position="UX/UI Designer" imageSrc={KAte}/>
        {/* Добавьте дополнительных членов команды здесь */}
      </div>
    </div>
  </div>
);

export default About;
