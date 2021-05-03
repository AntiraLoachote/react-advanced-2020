import React from 'react'

export default function JavascriptES6() {
  // Normal & Arrow Function
  function sayHi() {
    console.log('>> Hi')
  }
  sayHi()

  const sayHello = () => {
    console.log('>> Hello')
  }
  sayHello()

  //Object Initialozer
  const name = 'Pan'
  const nameA = { name: name }
  console.log('nameA ', nameA)
  const nameB = { name }
  console.log('nameB ', nameB)

  //Object Destructuring
  const user = { firstName: 'Antira', lastName: 'Loachote' }
  const firstNameA = user.firstName
  const lastNameA = user.lastName
  console.log('firstNameA lastNameA: ', firstNameA, lastNameA)

  const { firstName, lastName } = user
  console.log('firstName lastName: ', firstName, lastName)

  //Array Destructuring
  const users = ['Robin', 'Pan', 'Dan']
  const [userOne, userTwo, userThree] = users
  console.log('🚀 userOne, userTwo, userThree: ', userOne, userTwo, userThree)

  return (
    <>
      <h3>Javascript ES6</h3>
      <p>Normal & Arrow Function</p>
      <p>Object Initialozer</p>
      <p>Object Destructuring</p>
      <p>Array Destructuring</p>
      <label>Please see result on console.log and code example.</label>
    </>
  )
}
