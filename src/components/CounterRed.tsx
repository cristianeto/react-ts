import { useReducer } from 'react';

const initialState = {
  count: 0,
};

type ActionType =
  | {
      type: 'increment';
    }
  | {
      type: 'decrement';
    }
  | {
      type: 'custom';
      payload: number;
    };

const countReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'custom':
      return { ...state, count: action.payload };

    default:
      return state;
  }
};

const CounterRed = () => {
  const [{ count }, dispatch] = useReducer(countReducer, initialState);
  return (
    <div>
      <h2>Contador: {count}</h2>
      <button
        className='btn btn-outline-primary mt-2'
        onClick={() => dispatch({ type: 'increment' })}
      >
        +1
      </button>
      <button
        className='btn btn-outline-primary mt-2'
        onClick={() => dispatch({ type: 'decrement' })}
      >
        -1
      </button>
      <button
        className='btn btn-outline-danger mt-2'
        onClick={() => dispatch({ type: 'custom', payload: 100 })}
      >
        Custom
      </button>
    </div>
  );
};

export default CounterRed;
