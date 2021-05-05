import { useState } from 'react';
import Timer from './Timer';

const TimerFather = () => {
  const [milliseconds, setMilliseconds] = useState(1000);
  return (
    <>
      <span>Milliseconds {milliseconds}</span>
      <br />
      <button
        className='btn btn-outline-success'
        onClick={() => setMilliseconds(1000)}
      >
        1000
      </button>
      <button
        className='btn btn-outline-success'
        onClick={() => setMilliseconds(2000)}
      >
        2000
      </button>
      <Timer milliseconds={milliseconds} />
    </>
  );
};

export default TimerFather;
