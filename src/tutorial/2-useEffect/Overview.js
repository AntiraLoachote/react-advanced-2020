import React from 'react'
import { Link } from 'react-router-dom'
import Emoji from '../../Emoji'

import FirstTutorial from './final/1-useEffect-basics'
import SecondTutorial from './final/2-useEffect-cleanup'
import ThirdTutorial from './final/3-useEffect-fetch-data'

export default function UseEffectOverview() {
  return (
    <>
      <h4>
        The Lifecycle of React Hooks Component{' '}
        <a
          href="https://blog.bhanuteja.dev/the-lifecycle-of-react-hooks-component"
          target="_new"
        >
          Ref
        </a>
      </h4>
      <img
        height="600"
        src="https://raw.githubusercontent.com/donavon/hook-flow/master/hook-flow.png"
        alt="hook-flow"
      />
      <br /> <br />
      <h4>Types of useEffect callbacks</h4>
      <p>1) useEffect with no dependencies</p>
      <p>2) useEffect with empty dependencies</p>
      <p>3) useEffect with some dependencies</p>
      <br />
      <hr></hr>
      <>
        <br />
        <Link to="/use-effect/tutorial">
          <h3>
            <Emoji icon="👉🏻" /> Go to Tutorial
          </h3>
        </Link>
        <br />
        <h4>1-useEffect-basics.js</h4>
        <FirstTutorial></FirstTutorial>
        <br />
        <br />
        <hr></hr>
        <br />
        <h4>2-useEffect-cleanup.js</h4>
        <SecondTutorial></SecondTutorial>
        <br /> <br />
        <hr></hr>
        <br />
        <h4>3-useEffect-fetch-data.js</h4>
        <ThirdTutorial></ThirdTutorial>
        <br /> <br />
      </>
    </>
  )
}
