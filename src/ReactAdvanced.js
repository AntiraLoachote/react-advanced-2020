import React from 'react'
import { Link } from 'react-router-dom'

function ReactAdvanced() {
  return (
    <div>
      <h3>Advanced</h3>
      <Link to="why-hook">
        <h4>👉🏻 Why Hook?</h4>
      </Link>

      <Link to="useState">
        <h4>👩🏻‍💻 ⭐️ useState</h4>
      </Link>

      <Link to="useEffect">
        <h4>👩🏻‍💻 ⭐️ useEffect</h4>
      </Link>

      <Link to="forms">
        <h4>👩🏻‍💻 Forms</h4>
      </Link>

      <Link to="useRef">
        <h4>👉🏻 useRef</h4>
      </Link>

      <Link to="useReducer">
        <h4>👉🏻 useReducer</h4>
      </Link>

      <Link to="prop-drilling">
        <h4>👉🏻 Prop Drilling (optional)</h4>
      </Link>

      <Link to="useContext">
        <h4>👉🏻 useContext (optional)</h4>
      </Link>

      <Link to="custom-hook">
        <h4>👉🏻 custom hooks (optional)</h4>
      </Link>

      <Link to="prop-types">
        <h4>👉🏻 Prop-types (optional)</h4>
      </Link>

      <Link to="react-router">
        <h4>👉🏻 👍🏻 React router</h4>
      </Link>

      <Link to="performace-optimization">
        <h4>👉🏻 Performance Optimization (optional)</h4>
      </Link>
    </div>
  )
}
export default ReactAdvanced
