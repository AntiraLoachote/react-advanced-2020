import React from 'react'
import ReactIntro from './ReactIntro'
import ReactAdvanced from './ReactAdvanced'
import reactLogo from './assets/heart-react.gif'

function Home() {
  return (
    <div className="container" style={{ textAlign: 'left' }}>
      <h2 className="text-header">React class outline</h2>
      <div className="bg-white">
        <div className="flex items-cneter">
          <img width="100" src={reactLogo} alt="react-logo" />
          <h3>The Benefits of React:</h3>
        </div>
        <h4>- Speed of development process</h4>
        <h4>- Performance: Virtual DOM</h4>
        <h4>- Flexibility</h4>
        <h4>- Usability: Reusable and customizable components</h4>
        <h4>- It’s easy to learn</h4>
        <h4>- Strong community support</h4>
        <h4>- It offer better code stability</h4>
      </div>

      <br></br>
      <div className="bg-white">
        <ReactIntro />
      </div>
      <br></br>
      <div className="bg-white">
        <ReactAdvanced />
      </div>

      <br />
      <div className="item">
        <h4>Special Thanks:</h4>
        <a href="https://www.youtube.com/watch?v=4UZrsTqkcW4">
          FreeCodeCamp Youtube channel
        </a>
        <br />
        <a href="https://github.com/john-smilga/react-advanced-2020">
          Original tutorial repo
        </a>
      </div>
    </div>
  )
}

export default Home
