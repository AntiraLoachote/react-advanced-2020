import React, { SyntheticEvent, useEffect, useRef } from 'react'

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

// 1) When compoent mount should focus input
// 2) When call submit should print input value
const UseRefBasicsFinal = () => {
  const refContainer = useRef(null)

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()
    console.log(refContainer.current.value)
  }

  useEffect(() => {
    console.log(refContainer.current)
    refContainer.current.focus()
  })

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
        </div>
        <button type="submit">submit</button>
      </form>
    </>
  )
}

export default UseRefBasicsFinal
