import React from 'react'

export function JSXCSSAndJavascript() {
  const simpleText = `I'm simple text.`

  return (
    <div>
      <h4 style={{ color: 'red', backgroundColor: 'white', padding: '10px' }}>
        I'm red text.
      </h4>
      <p>Display variable: {simpleText}</p>
    </div>
  )
}
