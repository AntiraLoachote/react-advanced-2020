import React from 'react'

export default function FirstComponent() {
  return (
    <>
      <FirstComponetWithoutJSX />
      <FirstComponetWithJSX />
    </>
  )
}

//first component
function FirstComponetWithoutJSX() {
  return React.createElement(
    'div',
    {},
    React.createElement('h3', {}, 'Hello React without JSX!')
  )
}

//JSX
function FirstComponetWithJSX() {
  return (
    <div>
      <h3>Hello React with JSX!</h3>
    </div>
  )
}
