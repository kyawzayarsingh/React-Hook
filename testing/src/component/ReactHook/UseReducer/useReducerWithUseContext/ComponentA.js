import React, { useContext } from 'react'
import { CountContext } from './main'

function ComponentA() {
  const countContext = useContext(CountContext)
  return (
    <div>
      ComponentA
      <button onClick={() => countContext.countDispatch('increment')}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch('decrement')}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch('reset')}>reset</button>
    </div>
  )
}

export default ComponentA
