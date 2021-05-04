import React from 'react'

import propsImage from '../../assets/props.png'

//Simple props
/**
 *
 * @param {object} props
 */
function Message(props) {
  return <p>{props.text}</p>
}

//Props Destructuring
function Message2({ text }) {
  return <p>{text}</p>
}

//Props Childen
function Message3({ children }) {
  return children
}

function SimpleProps() {
  return (
    <>
      <h4>Props: for pass data between Nested Components</h4>
      <img src={propsImage} alt="propsImage" />

      <p>
        <textarea
          rows="3"
          cols="50"
          value={`function WelcomePage(){
  return  <Message text="I'm props."></Message>
}`}
        ></textarea>
      </p>

      <h4>Example props usecases.</h4>
      {/* Simple props */}
      <Message text="I'm prop."></Message>

      {/* Props Destructuring */}
      <Message2 text="I use props destructuring."></Message2>

      <Message3>
        <p>I use props childen.</p>
      </Message3>
    </>
  )
}

export default SimpleProps
