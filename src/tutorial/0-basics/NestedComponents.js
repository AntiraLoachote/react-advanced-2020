import React from 'react'

function NestedComponents() {
  return (
    <div>
      <h3>Nested components</h3>
      <Parent></Parent>
    </div>
  )
}

export default NestedComponents

function Parent() {
  return (
    <div style={{ backgroundColor: '#94cdff' }}>
      <p>Hi I'm parent.</p>
      <Kid></Kid>
      <Kid></Kid>
      <Kid></Kid>
      <Kid></Kid>
      <br></br>
    </div>
  )
}

function Kid() {
  return <div className="item">I'm child.</div>
}
