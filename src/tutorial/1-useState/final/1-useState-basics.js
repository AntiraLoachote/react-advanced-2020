import React, { useState } from 'react'

// UI Requirement: Random number 0-9 generator
// 1) Show number 0-9 and show 1 in first time
// 2) Has random button to change number

// logic helper: : https://www.w3schools.com/js/js_random.asp

const UseStateBasics = () => {
  const [value, setValue] = useState(1)
  return (
    <div>
      <h2>useState basic example</h2>
      <h1>Number: {value}</h1>
      <button
        type="button"
        className="btn"
        onClick={() => setValue(Math.floor(Math.random() * 10))}
      >
        Random
      </button>
    </div>
  )
}

export default UseStateBasics
