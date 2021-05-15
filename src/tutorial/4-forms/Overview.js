import React from 'react'
import { Link } from 'react-router-dom'
import Emoji from '../../Emoji.js'
import SimpleFormFinal from './final'

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
      <h4>SimpleForm.tsx</h4>
      <SimpleFormFinal />
      <br />
    </>
  )
}
