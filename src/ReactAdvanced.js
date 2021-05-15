import React from 'react'
import { Link } from 'react-router-dom'
import Emoji from './Emoji'

function ReactAdvanced() {
  return (
    <div>
      <h3>Advanced</h3>
      <Link to="hooks">
        <h4>
          <Emoji icon="👉🏻" /> Hooks Intro
        </h4>
      </Link>

      <Link to="use-state">
        <h4>
          <Emoji icon="👩🏻‍💻 ⭐️" /> useState
        </h4>
      </Link>

      <Link to="use-effect">
        <h4>
          <Emoji icon="👩🏻‍💻 ⭐️" /> useEffect
        </h4>
      </Link>

      <Link to="forms">
        <h4>
          <Emoji icon="👩🏻‍💻" /> Forms
        </h4>
      </Link>

      <Link to="use-ref">
        <h4>
          <Emoji icon="👉🏻" /> useRef
        </h4>
      </Link>

      <Link to="use-reducer">
        <h4>
          <Emoji icon="👉🏻" /> useReducer
        </h4>
      </Link>

      <Link to="prop-drilling">
        <h4>
          <Emoji icon="👉🏻" /> Prop Drilling (optional)
        </h4>
      </Link>

      <Link to="useContext">
        <h4>
          <Emoji icon="👉🏻" /> useContext (optional)
        </h4>
      </Link>

      <Link to="custom-hook" className="disabled-cursor">
        <h4>
          <Emoji icon="👉🏻" /> custom hooks (optional)
        </h4>
      </Link>

      <Link to="react-router" className="disabled-cursor">
        <h4>
          <Emoji icon="👉🏻" /> 👍🏻 React router
        </h4>
      </Link>

      <Link to="performace-optimization" className="disabled-cursor">
        <h4>
          <Emoji icon="👉🏻" /> Performance Optimization (optional)
        </h4>
      </Link>
    </div>
  )
}
export default ReactAdvanced
