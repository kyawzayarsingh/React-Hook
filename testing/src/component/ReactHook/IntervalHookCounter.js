import React, { useEffect, useState } from 'react'

function IntervalHookCounter() {
  const [count, setCount] = useState(0)

  const tick = () => {
    // setCount(count + 1)
    //if we set prevCount here, we don't need to put [count] in useEffect
    setCount((prevCount) => prevCount + 1)
  }
  useEffect(() => {
    const interval = setInterval(tick, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <div>
      <h2>Use setInterval Method : {count}</h2>
    </div>
  )
}

export default IntervalHookCounter
