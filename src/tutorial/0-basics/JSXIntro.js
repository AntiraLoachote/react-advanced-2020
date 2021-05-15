import React from 'react'
import Emoji from '../../Emoji'
import { JSXCSSAndJavascript } from './JSXCSSAndJavascript'

function JSX() {
  return (
    <div>
      <p>TEST</p>
    </div>
  )
}

//JSX Rules
function JSXRules() {
  return (
    <div>
      <h3>JSX Rules</h3>
      <ul>
        <li>
          <b>1. return single element</b> (div/section/ Fragment)
          <p>
            <Emoji icon="✅" /> {`  return <h1>Hello, world!</h1>`}
          </p>
          <p>
            <Emoji icon="❌" /> {`  return <p>1<p/> <h1>Hello, world!</h1>`}
          </p>
        </li>
        <li>
          2. use <b>camelCase</b> for html attribute
          <p>{`<button onClick={}>Click</button>`}</p>
          <JSX />
        </li>
        <li>
          3. use <b>className</b> instead of <s>class</s>
          <p>{`<button className="btn" >Click</button>`}</p>
        </li>
        <li>4 close every element</li>
        <p>{`<button className="btn" >Click</button>`}</p>
        <p>{`<br/>`}</p>
        <li>5. formatonClick={}ting using `( )`</li>
        <p>
          <textarea
            rows="6"
            cols="50"
            value={`return (
              <React.Fragment>
                <h1>Hello, world!</h1>
                <h1>Hello, world!</h1>
              </React.Fragment>
            )
            `}
          ></textarea>
        </p>
      </ul>
    </div>
  )
}

function JSXIntro() {
  return (
    <>
      <h3>JSX:</h3>
      <p>Help as a visual aid when working UI inside the Javascript code.</p>
      <p>
        <textarea
          rows="3"
          cols="50"
          value={`<h1>Hello, world!</h1>`}
        ></textarea>
      </p>
      <p>
        <textarea rows="3" cols="50" value={`<Message></Message>`}></textarea>
      </p>

      <br />
      <JSXRules />
      <br />
      <br />
      <h3>JSX CSS & Javascript</h3>
      <JSXCSSAndJavascript />
    </>
  )
}

export default JSXIntro
