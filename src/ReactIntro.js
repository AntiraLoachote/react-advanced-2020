import React from 'react'
import { Link } from 'react-router-dom'

function ReactIntro() {
  return (
    <div>
      <h3>Basic</h3>
      <Link to="first-component">
        <h4>👉🏻 First component</h4>
      </Link>

      <Link to="jsx">
        <h4>👉🏻 JSX</h4>
      </Link>

      <Link to="nested">
        <h4>👉🏻 Nested components/ React Tools</h4>
      </Link>

      <Link to="props">
        <h4>👉🏻 Props</h4>
      </Link>

      <Link to="event-handler">
        <h4>👉🏻 Event Basics</h4>
      </Link>

      <Link to="ec6">
        <h4>👉🏻 Javascript ES6</h4>
      </Link>

      <Link to="simple-list">
        <h4>👉🏻 ⭐️ Simple List</h4>
      </Link>
    </div>
  )
}
export default ReactIntro
