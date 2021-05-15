import React, { useState } from 'react'

// UI Requirement: Random number 0-9 generator
// 1) Show number 0-9 and show 1 in first time
// 2) Has random button to change number

// logic helper: : https://www.w3schools.com/js/js_random.asp

const UseStateBasics = () => {
  const [count, setCount] = useState(1)

  function handleClick() {
    const randomNumber = Math.floor(Math.random() * 10)
    setCount(randomNumber)
  }

  return (
    <>
      <h3>Number: {count}</h3>
      <button className="btn" onClick={handleClick}>
        Random
      </button>
    </>
  )
}

export default UseStateBasics
