import React from 'react'
import { Link } from 'react-router-dom'
import Emoji from './Emoji'

function ReactIntro() {
  return (
    <div>
      <h3>Basic</h3>
      <Link to="virtual-dom">
        <h4>
          <Emoji icon="👉🏻" />
          Virtual DOM Concept
        </h4>
      </Link>
      <Link to="first-component">
        <h4>
          <Emoji icon="👉🏻" />
          First component
        </h4>
      </Link>

      <Link to="jsx">
        <h4>
          <Emoji icon="👉🏻" />
          JSX
        </h4>
      </Link>

      <Link to="nested">
        <h4>
          <Emoji icon="👉🏻" />
          Nested components/ React Tools
        </h4>
      </Link>

      <Link to="props">
        <h4>
          <Emoji icon="👉🏻" />
          Props
        </h4>
      </Link>

      <Link to="event-handler">
        <h4>
          <Emoji icon="👉🏻" />
          Event Basics
        </h4>
      </Link>

      <Link to="ec6">
        <h4>
          <Emoji icon="👉🏻" />
          Javascript ES6
        </h4>
      </Link>

      <Link to="simple-list">
        <h4>
          <Emoji icon="👩🏻‍💻 ⭐️" />
          Simple List
        </h4>
      </Link>
    </div>
  )
}
export default ReactIntro
