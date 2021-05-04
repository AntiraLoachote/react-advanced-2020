import React from 'react'
import { Link } from 'react-router-dom'
import Emoji from '../../../Emoji'

export default function SimpleList() {
  const fruits = ['🍎  Apple', '🍊  Orange', '🍓  Strawberry', '🍋  Lemon']
  return (
    <>
      <h3>Fruits</h3>
      {fruits.map((fruit) => (
        <p className="item">{fruit}</p>
      ))}

      <Link to="/simple-list/tutorial">
        <h3>
          <Emoji icon="👉🏻" /> Go to Tutorial
        </h3>
      </Link>
    </>
  )
}
