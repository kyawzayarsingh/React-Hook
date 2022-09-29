import React, { useReducer } from 'react'

const initialState = {
  firstCounter: 0,
  secondCounter: 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + 1 }
    case 'decrement':
      return { ...state, firstCounter: state.firstCounter - 1 }
    case 'increment2':
      return { ...state, secondCounter: state.secondCounter + 1 }
    case 'decrement2':
      return { ...state, secondCounter: state.secondCounter - 1 }
    case 'reset':
      return initialState
  }
}
function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <div>First Counter: {count.firstCounter}</div>
      <div>Second Counter: {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: 'increment' })}>
        increment Counter 1
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        decrement Counter 1
      </button>
      <button onClick={() => dispatch({ type: 'increment2' })}>
        increment Counter 2
      </button>
      <button onClick={() => dispatch({ type: 'decrement2' })}>
        decrement Counter 2
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </div>
  )
}

export default CounterThree
