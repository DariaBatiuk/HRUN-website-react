import React from 'react';
import './index.css';

function PrimaryBtn({ className }) {
  // Прямое использование переданного класса без внутренней логики
  const buttonClassName = `btn ${className || ''}`;

  return (
    <a href="#contact" className={buttonClassName}>
      Contact us
    </a>
  );
}

export default PrimaryBtn;
