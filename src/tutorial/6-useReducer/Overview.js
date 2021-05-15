import React from 'react'
import { Link } from 'react-router-dom'
import Emoji from '../../Emoji.js'
import Final from './final'

export default function UseReducerOverview() {
  return (
    <>
      <Link to="/use-reducer/tutorial">
        <h3>
          <Emoji icon="👉🏻" /> Go to Tutorial
        </h3>
      </Link>
      <hr></hr>
      <br />
      <h4>useReducer</h4>
      <Final />
      <br />
    </>
  )
}
