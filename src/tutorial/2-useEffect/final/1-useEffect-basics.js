import React, { useState, useEffect } from 'react'
// by default runs after every re-render

// Requirements
// 1) Basics - Try to create 1st useEffect and Log: 'call useEffect' when useEffect runs
// 2) Conditions - Log: '>>> New Messages(${value})' when value > 2
// 3) Dependency List - Try to create 2nd useEffect and add [] in Dependency and log 'initial time'
// 4) Dependency List - Try to add value in dependemcy of 1st useEffect

const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  //1) & 2)
  useEffect(() => {
    console.log('call useEffect without dependency')
    if (value > 2) {
      console.log(`New Messages(${value})`)
    }
  })

  //3)
  useEffect(() => {
    console.log('initial time')
  }, [])

  //4)
  useEffect(() => {
    console.log('call useEffect when value changed')
    if (value > 2) {
      console.log(`New Messages(${value})`)
    }
  }, [value])

  console.log('render component')
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  )
}

export default UseEffectBasics
