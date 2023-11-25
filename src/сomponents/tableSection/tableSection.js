import React from 'react';
import PropTypes from 'prop-types';
import smallBusinessData from './smallBusinessData/smallBusinessData';
import mediumBusinessData from './mediumBusinessData/mediumBusinessData';
import largeBusinessData from './largeBusinessServices/largeBusinessData';
import './index.css';

const ServiceItem = ({ title, description }) => (
  <div className="serviceItem">
    <h3 className='h3 service__title'>{title}</h3>
    <p className='p1'>{description}</p>
  </div>
);

ServiceItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const CategoryRow = ({ category, services, img }) => (
  <article className="categoryRow">
    <div className="categoryHeader"> {/* Обертка для заголовка категории и изображения */}
      <div className='h3 category'>{category}</div>
      <img src={img} alt={category} className="serviceImage" />
    </div>
    <div className="servicesWrapper"> {/* Обертка для всех ServiceItem */}
      {services.map((service, index) => (
        <ServiceItem key={index} title={service.title} description={service.description} />
      ))}
    </div>
  </article>
	
);


CategoryRow.propTypes = {
  category: PropTypes.string.isRequired,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  img: PropTypes.string.isRequired
};

// Компонент для рендеринга заголовка и таблицы данных
const BusinessSection = ({ title, data }) => (
  <>
    <header className='header'>
      <h2 className='h1 table__header'>{title}</h2>
    </header>
    {data.map((table, index) => (
      <CategoryRow key={index} {...table} />
    ))}
  </>
);

BusinessSection.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      services: PropTypes.array.isRequired,
      img: PropTypes.string.isRequired
    })
  ).isRequired,
};

// Основной компонент Table, который рендерит разделы для small и medium бизнеса
function Table() {
  return (
    <section className="service">
      <BusinessSection title="SMALL BUSINESS SERVICES" data={smallBusinessData} />
      <BusinessSection title="MEDIUM BUSINESS SERVICES" data={mediumBusinessData} />
			<BusinessSection title="LARGE BUSINESS SERVICES" data={largeBusinessData} />

    </section>
  );
}

export default Table;
