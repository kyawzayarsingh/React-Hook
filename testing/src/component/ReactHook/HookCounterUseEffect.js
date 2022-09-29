import React, { useEffect, useState } from 'react'

function HookCounterUseEffect() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    console.log(`Use Effect - updating document title`)
    document.title = `You clicked ${count} times`

    //if we use any event in useEffect, mouseEvent or other event, we will clean up in return
    // return() => {
    //     console.log("clean up code here");
    //     //... remove code here or clean up code here
    // }
  }, [count])

  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Click {count} times </button>
    </div>
  )
}

export default HookCounterUseEffect
