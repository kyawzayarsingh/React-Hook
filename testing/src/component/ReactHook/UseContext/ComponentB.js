import React, { useContext } from 'react'
import { UserContext, ChannelContext } from '../../../App'
import ComponentC from './ComponentC'

function ComponentB() {
  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)

  return (
    <div>
      <h2>Using UseContext Hook</h2>
      {user} - {channel}
      <br />
      <ComponentC />
    </div>
  )
}

export default ComponentB
