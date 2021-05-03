import React from 'react'
import { Link } from 'react-router-dom'

function ReactAdvanced() {
  return (
    <div>
      <h3>Advanced</h3>
      <Link to="why-hook">
        <h4>👉🏻 Why Hook?</h4>
      </Link>

      <Link to="use-state">
        <h4>👩🏻‍💻 ⭐️ useState</h4>
      </Link>

      <Link to="use-effect">
        <h4>👩🏻‍💻 ⭐️ useEffect</h4>
      </Link>

      <Link to="forms">
        <h4>👩🏻‍💻 Forms</h4>
      </Link>

      <Link to="useRef" disabled className="disabled-cursor">
        <h4>👉🏻 useRef</h4>
      </Link>

      <Link to="useReducer" className="disabled-cursor">
        <h4>👉🏻 useReducer</h4>
      </Link>

      <Link to="prop-drilling" className="disabled-cursor">
        <h4>👉🏻 Prop Drilling (optional)</h4>
      </Link>

      <Link to="useContext" className="disabled-cursor">
        <h4>👉🏻 useContext (optional)</h4>
      </Link>

      <Link to="custom-hook" className="disabled-cursor">
        <h4>👉🏻 custom hooks (optional)</h4>
      </Link>

      <Link to="prop-types" className="disabled-cursor">
        <h4>👉🏻 Prop-types (optional)</h4>
      </Link>

      <Link to="react-router" className="disabled-cursor">
        <h4>👉🏻 👍🏻 React router</h4>
      </Link>

      <Link to="performace-optimization" className="disabled-cursor">
        <h4>👉🏻 Performance Optimization (optional)</h4>
      </Link>
    </div>
  )
}
export default ReactAdvanced
