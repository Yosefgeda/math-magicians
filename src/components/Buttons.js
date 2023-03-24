import React from 'react';
import calculate from '../logic/calculate';

// // const n = calculate;
const Buttons = () => {
  const [result, setResult] = React.useState({
    total: '0',
    next: null,
    operation: null,
  });

  const handlClick = (e) => {
    setResult(calculate(result, e.target.innerHTML.trim()));
  };
  const displayValue = (result.total === null ? '' : result.total)
  + (result.operation ? ` ${result.operation}` : '')
  + (result.next ? ` ${result.next}` : '');

  return (
    <div className="btn-container">
      <div className="result-output">{displayValue}</div>

      <button className="input-btn" type="submit" onClick={handlClick}>AC </button>
      <button className="input-btn" type="submit" onClick={handlClick}>+/-</button>
      <button className="input-btn" type="submit" onClick={handlClick}>%</button>
      <button className="input-btn operations" type="submit" onClick={handlClick}>÷</button>
      <button className="input-btn" type="submit" onClick={handlClick}>7</button>
      <button className="input-btn" type="submit" onClick={handlClick}>8</button>
      <button className="input-btn" type="submit" onClick={handlClick}>9</button>
      <button className="input-btn operations" type="submit" onClick={handlClick}>x</button>
      <button className="input-btn" type="submit" onClick={handlClick}>4</button>
      <button className="input-btn" type="submit" onClick={handlClick}>5</button>
      <button className="input-btn" type="submit" onClick={handlClick}>6</button>
      <button className="input-btn operations" type="submit" onClick={handlClick}>-</button>
      <button className="input-btn" type="submit" onClick={handlClick}>1</button>
      <button className="input-btn" type="submit" onClick={handlClick}>2</button>
      <button className="input-btn" type="submit" onClick={handlClick}>3</button>
      <button className="input-btn operations" type="submit" onClick={handlClick}>+</button>
      <button className="input-btn zero" type="submit" onClick={handlClick}>0</button>
      <button className="input-btn" type="submit" onClick={handlClick}>.</button>
      <button className="input-btn operations" type="submit" onClick={handlClick}>=</button>
    </div>
  );
};

export default Buttons;
