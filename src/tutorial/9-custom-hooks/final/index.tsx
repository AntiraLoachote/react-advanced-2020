import React, { useCallback, useState } from 'react'
// Usage
export default function ToggleUsage() {
  const [isTextChanged, setIsTextChanged] = useToggle()

  return (
    <>
      <h2>useToggle Example</h2>
      <button className="btn" onClick={setIsTextChanged}>
        {isTextChanged ? 'Toggled' : 'Click to Toggle'}
      </button>
    </>
  )
}
// Hook
function useToggle(initialState: boolean = false) {
  // Initialize the state
  const [state, setState] = useState(initialState)

  // Define and memorize toggler function in case we pass down the comopnent,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback(() => setState((state) => !state), [])

  return [state, toggle] as const
}
