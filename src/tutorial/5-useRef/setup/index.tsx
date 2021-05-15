import React, { SyntheticEvent, useEffect, useRef } from 'react'

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

// 1) When compoent mount should focus input
// 2) When call submit should print input value
const UseRefBasicsSetup = () => {
  function handleSubmit() {}

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" />
        </div>
        <button type="submit">submit</button>
      </form>
    </>
  )
}

export default UseRefBasicsSetup
