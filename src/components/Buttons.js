import React from 'react';

const Buttons = () => (
  <div className="btn-container">
    <div className="result-output">0</div>
    <button className="input-btn" type="submit">AC </button>
    <button className="input-btn" type="submit">+/-</button>
    <button className="input-btn" type="submit">%</button>
    <button className="input-btn operations" type="submit">/</button>
    <button className="input-btn" type="submit">7</button>
    <button className="input-btn" type="submit">8</button>
    <button className="input-btn" type="submit">9</button>
    <button className="input-btn operations" type="submit">X</button>
    <button className="input-btn" type="submit">4</button>
    <button className="input-btn" type="submit">5</button>
    <button className="input-btn" type="submit">6</button>
    <button className="input-btn operations" type="submit">-</button>
    <button className="input-btn" type="submit">1</button>
    <button className="input-btn" type="submit">2</button>
    <button className="input-btn" type="submit">3</button>
    <button className="input-btn operations" type="submit">+</button>
    <button className="input-btn zero" type="submit">0</button>
    <button className="input-btn" type="submit">.</button>
    <button className="input-btn operations" type="submit">=</button>
  </div>
);

export default Buttons;
