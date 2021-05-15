import React from 'react'
import { Link } from 'react-router-dom'
import Emoji from '../../Emoji.js'
import UseRefBasicsFinal from './final'

export default function UseRefOverview() {
  return (
    <>
      <Link to="/use-ref/tutorial">
        <h3>
          <Emoji icon="👉🏻" /> Go to Tutorial
        </h3>
      </Link>
      <hr></hr>
      <br />
      <h4>Basics</h4>
      <UseRefBasicsFinal />
      <br />
    </>
  )
}
