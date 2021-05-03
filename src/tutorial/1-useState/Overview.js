import React from 'react'
import { Link } from 'react-router-dom'
import FirstTutorial from './final/1-useState-basics.js'
import SecondTutorial from './final/2-useState-array'

export default function UseStateOverview() {
  return (
    <>
      <Link to="/use-state/tutorial">
        <h3>👉🏻 Go to Tutorial</h3>
      </Link>
      <hr></hr>
      <br />
      <h4>1-useState-basics.js</h4>
      <FirstTutorial></FirstTutorial>
      <br />
      <hr></hr>
      <br />
      <h4>2-useState-array.js</h4>
      <SecondTutorial></SecondTutorial>
      <br /> <br />
    </>
  )
}
