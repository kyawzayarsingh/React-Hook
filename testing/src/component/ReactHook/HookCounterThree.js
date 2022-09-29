import React, { useState } from 'react'

function HookCounterThree() {
  const [name, setName] = useState({ firstName: '', lastName: '' })
  return (
    <div>
      <form>
        <input
          type="text"
          name="fname"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          name="lname"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <h2>My First Name is {name.firstName}</h2>
        <h2>My Last Name is {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  )
}

export default HookCounterThree
