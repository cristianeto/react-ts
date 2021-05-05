import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = (num: number = 1): void => {
    setCounter(counter + num);
  };
  return (
    <div className='mt-5'>
      <h3>Counter: useState</h3>
      <span>Value: {counter}</span>
      <br />
      <button
        className='btn btn-outline-primary mt-2'
        onClick={() => increment()}
      >
        +1
      </button>
      <button
        className='btn btn-outline-primary mt-2'
        onClick={() => increment(2)}
      >
        +2
      </button>
      <button
        className='btn btn-outline-primary mt-2'
        onClick={() => setCounter(0)}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
