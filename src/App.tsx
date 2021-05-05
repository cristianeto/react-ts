import Counter from './components/Counter';
import User from './components/User';
import TimerFather from './components/TimerFather';
import CounterRed from './components/CounterRed';

function App() {
  return (
    <div className='App'>
      <h1> React + Typescript</h1>
      <hr />
      <h2>1. useState</h2>
      <Counter />
      <User />
      <h2>2. useEffect - useRef</h2>
      <hr />
      <TimerFather />
      <h2>3. useReducer</h2>
      <hr />
      <CounterRed />
    </div>
  );
}

export default App;
