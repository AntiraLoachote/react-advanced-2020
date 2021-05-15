import React, { useState } from 'react'
import { PEOPLES } from '../../../data'

// UI Requirement: Show, Remove and Clear peoples list
// 1) Show People list
// 2) Can remove people from list
// 3) Can remove all people using clear button

// CSS classname
// 'item' for list element
// 'btn' for button element

const UseStateArray = () => {
  const [people, setPeople] = useState(PEOPLES)

  function handleRemovePerson(id) {
    //recommend
    // function
    setPeople((people) => people.filter((person) => person.id !== id))

    //have dependency
    // setPeople(people.filter((person) => person.id !== id))
  }

  return (
    <>
      {people.map((person) => {
        return (
          <div key={person.id} className="item">
            <p>{person.name}</p>
            <button onClick={() => handleRemovePerson(person.id)}>
              remove
            </button>
          </div>
        )
      })}
      <button
        className="btn"
        onClick={() => {
          setPeople([])
        }}
      >
        Clear
      </button>
    </>
  )
}

export default UseStateArray
