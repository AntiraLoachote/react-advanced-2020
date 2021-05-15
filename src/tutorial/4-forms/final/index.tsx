import React, { ChangeEvent, useState, SyntheticEvent } from 'react'

// Requirement:
// User want to add person form (Reqiured: First name, email input and age)
// User want to see people info (First name, email and age).

type Person = {
  firstName: string
  email: string
  age: number
}
export default function SimpleFormFinal() {
  const initailPerson: Person = {
    firstName: '',
    email: '',
    age: null,
  }
  const [person, setPerson] = useState(initailPerson)
  const [people, setPeople] = useState<Person[]>([])

  function handleInputChange(e: ChangeEvent<HTMLInputElement>): void {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e: SyntheticEvent): void {
    e.preventDefault()
    setPeople([...people, person])
    setPerson({ firstName: '', email: '', age: null })
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
          />
        </div>
        <div className="form-control">
          <label>Email : </label>
          <input
            type="text"
            name="email"
            value={person.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Age : </label>
          <input
            type="number"
            name="age"
            value={person.age}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">add person</button>
      </form>
      <PeopleList people={people} />
    </>
  )
}

type Props = {
  people: Person[]
}

function PeopleList({ people }: Props): JSX.Element {
  return (
    <>
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
