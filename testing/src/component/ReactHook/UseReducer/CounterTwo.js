import React, { useReducer } from 'react'

const initialState = {
  firstCounter: 0,
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { firstCounter: state.firstCounter + 1 }
    case 'increment5':
      return { firstCounter: state.firstCounter + action.value }
    case 'decrement':
      return { firstCounter: state.firstCounter - 1 }
    case 'reset':
      return initialState
    default:
      return state
  }
}

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'increment5', value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </div>
  )
}

export default CounterTwo
