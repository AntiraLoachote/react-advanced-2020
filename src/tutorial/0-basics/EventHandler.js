import React from 'react'

export default function EventHandler() {
  return (
    <>
      <h4>EventHandler </h4>
      <ActionLink></ActionLink>
      <SimpleInput></SimpleInput>
    </>
  )
}

function ActionLink() {
  //handle event fn
  function handleClick(event) {
    event.preventDefault()
    alert('handled click event.')
  }

  //   const handleClick = (event) => {
  //     event.preventDefault()
  //     alert('handled click event.')
  //   }

  return (
    <>
      <a href="/home" onClick={handleClick}>
        Click me
      </a>
    </>
  )
}

function SimpleInput() {
  function handleTextChange(event) {
    const value = event.target.value
    console.log('Input value: ', value)
  }

  return (
    <div>
      <label>Text: </label>
      <input type="text" onChange={handleTextChange} />
    </div>
  )
}
