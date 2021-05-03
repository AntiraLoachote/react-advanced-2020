import React from 'react'

// UI Requirement: Resize screen detector
// 1) Has size State and init value with  'window.innerWidth'
// 2) Show width size when resize browser
// window.addEventListener('resize', callbackFn)

// 3) Clean up EventListener when resize screen again
// window.removeEventListener('resize', callbackFn)

const UseEffectCleanup = () => {
  return (
    <>
      <h1>window</h1>
      {/* <h2>{size} PX</h2> */}
    </>
  )
}

export default UseEffectCleanup
