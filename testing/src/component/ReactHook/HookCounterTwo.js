import React, { useState } from 'react'

function HookCounterTwo() {
  const initialCount = 0
  const [count, setCount] = useState(initialCount)

  const incrementByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1)
    }
  }
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={incrementByFive}>Increment 5</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
    </div>
  )
}

export default HookCounterTwo
