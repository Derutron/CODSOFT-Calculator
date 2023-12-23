
import { useState } from 'react';
 import '../css/Calculator.css'

const Calculator = () => {
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const handleCalculate = () => {
    try {
      const result = eval(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  const handleClear = () => {
    setExpression('');
  };

  return (
    <div className="calculator bg-gray-300 p-4 rounded-md shadow-md mt-[100px]">
        <div className='w-[200px] h-[40px]'>
            <p className='text-[20px] font-[700]'>Calculator</p>
        </div>
      <input
        type="text"
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
        className="w-full mb-4 p-2 text-xl"
      />
      <div className="grid grid-cols-4 gap-4">
      <button
        onClick={() => handleButtonClick('7')}
        className="btn bg-green-500 border text-[30px] font-[900] w-[100px] h-[100px]"
        >
        7
        </button>

        <button
          onClick={() => handleButtonClick('8')}
          className="btn bg-green-500 border w-[100px] h-[100px] text-[30px] font-[900]"
        >
          8
        </button>
        <button
          onClick={() => handleButtonClick('9')}
          className="btn bg-green-500 border w-[100px] h-[100px] text-[30px] font-[900]"
        >
          9
        </button>
        <button
          onClick={() => handleButtonClick('+')}
          className="btn btn-operator bg-green-500 border w-[100px] h-[100px] text-[30px] font-[900]"
        >
          +
        </button>
        <button
          onClick={() => handleButtonClick('4')}
          className="btn bg-green-500 border w-[100px] h-[100px] text-[30px] font-[900]"
        >
          4
        </button>
        <button
          onClick={() => handleButtonClick('5')}
          className="btn bg-green-500 border w-[100px] h-[100px] text-[30px] font-[900]"
        >
          5
        </button>
        <button
          onClick={() => handleButtonClick('6')}
          className="btn bg-green-500 border w-[100px] h-[100px] text-[30px] font-[900]"
        >
          6
        </button>
        <button
          onClick={() => handleButtonClick('-')}
          className="btn btn-operator bg-green-500 border w-[100px] h-[100px] text-[30px] font-[900]"
        >
          -
        </button>
        <button
          onClick={() => handleButtonClick('1')}
          className="btn bg-green-500 border w-[100px] h-[100px] text-[30px] font-[900]"
        >
          1
        </button>
        <button
          onClick={() => handleButtonClick('2')}
          className="btn bg-green-500 border w-[100px] h-[100px] text-[30px] font-[900]"
        >
          2
        </button>
        <button
          onClick={() => handleButtonClick('3')}
          className="btn bg-green-500 border w-[100px] h-[100px] text-[30px] font-[900]"
        >
          3
        </button>
        <button
          onClick={() => handleButtonClick('*')}
          className="btn btn-operator bg-green-500 border w-[100px] h-[100px] text-[30px] font-[900]"
        >
          *
        </button>
        <button
          onClick={() => handleButtonClick('0')}
          className="btn bg-green-500 border w-[100px] h-[100px] text-[30px] font-[900]"
        >
          0
        </button>
        <button
          onClick={() => handleButtonClick('.')}
          className="btn bg-green-500 border w-[100px] h-[100px] text-[30px] font-[900]"
        >
          .
        </button>
        <button onClick={handleCalculate} className="btn btn-equal bg-green-500 border w-[100px] h-[100px] text-[30px] font-[900]">
          =
        </button>
        <button
          onClick={() => handleButtonClick('/')}
          className="btn btn-operator bg-green-500 border w-[100px] h-[100px] text-[30px] font-[900]"
        >
          /
        </button>
        
        <button onClick={handleClear} className="btn btn-clear bg-green-500 border w-[460px] h-[100px] text-[30px] font-[900]">
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;