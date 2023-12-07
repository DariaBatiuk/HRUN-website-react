import React from 'react';
import './index.css';
import Table from '../../сomponents/tableSection/tableSection';
import PrimaryBtn from '../../сomponents/primaryBtn/PrimaryBtn';

function Service() {
  return (
    <div>
      <Table />
      <PrimaryBtn className="mobile-only-btn" />
    </div>
  );
}

export default Service;

