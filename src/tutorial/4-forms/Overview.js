import React from 'react'
import { Link } from 'react-router-dom'
import Emoji from '../../Emoji.js'
import FirstTutorial from './final/1-controlled-inputs'

export default function FormsOverview() {
  return (
    <>
      <Link to="/forms/tutorial">
        <h3>
          <Emoji icon="👉🏻" /> Go to Tutorial
        </h3>
      </Link>
      <hr></hr>
      <br />
      <h4>1-controlled-inputs</h4>
      <FirstTutorial></FirstTutorial>
      <br />
    </>
  )
}
