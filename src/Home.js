import React from 'react'
import ReactIntro from './ReactIntro'
import ReactAdvanced from './ReactAdvanced'
// import Setup from './tutorial/2-useEffect/setup/3-useEffect-fetch-data'

function Home() {
  return (
    <div className="container" style={{ textAlign: 'left' }}>
      <h2>React class outline</h2>
      <ReactIntro />
      <br></br>
      <ReactAdvanced />
      {/* <Setup /> */}
      {/* <Final /> */}
    </div>
  )
}

export default Home
