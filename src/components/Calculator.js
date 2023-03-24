import React from 'react';
import Buttons from './Buttons';
import Quotes from './Quotes';
import Navbar from './Navbar';

const Calculator = () => (
  <div className="calculator">
    <Navbar />
    <div className="container">
      <Quotes data="" />
      <Buttons />
    </div>
  </div>
);

export default Calculator;
