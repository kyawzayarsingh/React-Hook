import React from 'react'
import { ChannelContext, UserContext } from '../../../App'

function ComponentD() {
  return (
    <div>
      <h2>Using UseContext Provider, Consumer</h2>
      <p>Component D</p>
      {/* only one context use */}
      {/* <UserContext.Consumer>
        {(user) => {
          return <div>UserContext Value : {user}</div>
        }}
      </UserContext.Consumer> */}

      {/*you can see in Compnent B, it works the same result from this using useContext Hook */}
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    User Context Value : {user} and Channel Context Value :{' '}
                    {channel}
                  </div>
                )
              }}
            </ChannelContext.Consumer>
          )
        }}
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentD
