import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [output, setOutput] = useState('');
  const specialChar = ['%', '*', '/', '-', '+', '='];

  const calculate = (btnValue) => {
    if (btnValue === '=' && output !== '') {
      try {
        setOutput(eval(output.replace('%', '/100')).toString());
      } catch (error) {
        setOutput('Error');
      }
    } else if (btnValue === 'AC') {
      setOutput('');
    } else if (btnValue === 'DEL') {
      setOutput(output.slice(0, -1));
    } else {
      if (output === '' && specialChar.includes(btnValue)) return;
      setOutput(output + btnValue);
    }
  };

  return (
    <div className="container">
      <input type="text" className="display" value={output} readOnly />

      <div className="buttons">
        <button className="operator" data-value="DEL" onClick={() => calculate('DEL')}>
          DEL
        </button>
        <button className="operator" data-value="AC" onClick={() => calculate('AC')}>
          AC
        </button>
        <button className="operator" data-value="%" onClick={() => calculate('%')}>
          %
        </button>
        <button className="operator" data-value="/" onClick={() => calculate('/')}>
          /
        </button>

        <button data-value="7" onClick={() => calculate('7')}>
          7
        </button>
        <button data-value="8" onClick={() => calculate('8')}>
          8
        </button>
        <button data-value="9" onClick={() => calculate('9')}>
          9
        </button>
        <button className="operator" data-value="*" onClick={() => calculate('*')}>
          *
        </button>

        <button data-value="4" onClick={() => calculate('4')}>
          4
        </button>
        <button data-value="5" onClick={() => calculate('5')}>
          5
        </button>
        <button data-value="6" onClick={() => calculate('6')}>
          6
        </button>
        <button className="operator" data-value="-" onClick={() => calculate('-')}>
          -
        </button>

        <button data-value="1" onClick={() => calculate('1')}>
          1
        </button>
        <button data-value="2" onClick={() => calculate('2')}>
          2
        </button>
        <button data-value="3" onClick={() => calculate('3')}>
          3
        </button>
        <button className="operator" data-value="+" onClick={() => calculate('+')}>
          +
        </button>

        <button data-value="0" onClick={() => calculate('0')}>
          0
        </button>
        <button data-value="00" onClick={() => calculate('00')}>
          00
        </button>
        <button data-value="." onClick={() => calculate('.')}>
          .
        </button>
        <button className="operator" data-value="=" onClick={() => calculate('=')}>
          =
        </button>
      </div>
    </div>
  );
};

export default App;
