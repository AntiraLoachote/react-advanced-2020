import React from 'react'
import { Link } from 'react-router-dom'

export default function SimpleList() {
  const fruits = ['🍎  Apple', '🍊  Orange', '🍓  Strawberry', '🍋  Lemon']
  return (
    <>
      <h3>Fruits</h3>
      {fruits.map((fruit) => (
        <p className="item">{fruit}</p>
      ))}

      <Link to="/simple-list/tutorial">
        <h3>👉🏻 Go to Tutorial</h3>
      </Link>
    </>
  )
}
