import React from 'react'

export default function SimpleListTutorial() {
  const fruits = ['🍎  Apple', '🍊 Banana', '🍓 Strawberry', '🍋 Lemon']
  return (
    <>
      <h3>Fruits</h3>
      {fruits.map((fruit, index) => (
        <p className="item" key={index}>
          {fruit}
        </p>
      ))}
    </>
  )
}
