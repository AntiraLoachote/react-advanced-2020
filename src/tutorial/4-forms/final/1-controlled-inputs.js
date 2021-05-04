import React, { useState } from 'react'

// Requirement:
// User want to add person form (Reqiured: First name, email input and age)
// User want to see people info (First name, email and age).
// Can add duplicate value
// After submit should clear up input text

const ControlledInputs = () => {
  const [person, setPerson] = useState({ firstName: '', email: '', age: '' })
  const [people, setPeople] = useState([
    { firstName: 'Pan', email: 'pan@simplesat.io', age: 26 },
  ])

  function handleSubmit(e) {
    e.preventDefault()
    setPeople([...people, person])
    setPerson({ firstName: '', email: '' })
  }

  function handleInputChange(e) {
    setPerson({ ...person, [e.target.name]: e.target.value })
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label>First name : </label>
          <input
            type="text"
            name="firstName"
            value={person.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-control">
          <label>Email : </label>
          <input
            type="email"
            name="email"
            value={person.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-control">
          <label>Age : </label>
          <input
            type="number"
            name="age"
            value={person.age}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">add person</button>
      </form>
      {people.map((person, index) => (
        <div key={index} className="item">
          <h4>
            {index + 1}) {person.firstName}
          </h4>
          <p>{person.email}</p>
          <p>{person.age}</p>
        </div>
      ))}
    </>
  )
}

export default ControlledInputs
