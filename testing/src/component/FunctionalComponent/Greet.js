import React from 'react'

//write using js function
// function Greet() {
//   return (
//     <div>
//       <h1>Good Morning</h1>
//     </div>
//   )
// }

//write using JS ES6 function

// const Greet = () => {
//   return (
//     <div>
//       <h1>Good Morning</h1>
//     </div>
//   )
// }

//the other way, when you don't want to write export default .....
//you can write this, see below code
//and when you import in App.js, you can use curly bracelet
//for example: import {Greet} from "./.../.../"
export function Greet() {
  return (
    <div>
      <h1>Good Morning</h1>
    </div>
  )
}

//export default Greet
