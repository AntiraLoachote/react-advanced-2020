import React, { useState, useEffect } from 'react'

// cleanup function
// second argument

// UI Requirement: Resize screen detector
// 1) Show width of screen when resize browser
// window.addEventListener('resize', callbackFn)

// 2) Clean up EventListener when resize screen again
// window.removeEventListener('resize', callbackFn)

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    console.log('useEffect')
    window.addEventListener('resize', checkSize)
    return () => {
      console.log('cleanup')
      window.removeEventListener('resize', checkSize)
    }
  })

  // don't clear up when called once time
  // useEffect(() => {
  //   console.log('useEffect')
  //   window.addEventListener('resize', checkSize)
  //   // return () => {
  //   //   console.log('cleanup')
  //   //   window.removeEventListener('resize', checkSize)
  //   // }
  // }, [])

  console.log('render')
  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  )
}

export default UseEffectCleanup
