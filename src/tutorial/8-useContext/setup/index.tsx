import React, { useState } from 'react'

//  remove unuse props in List component using context
const PEOPLES: Person[] = [
  { id: 1, name: 'john' },
  { id: 2, name: 'peter' },
  { id: 3, name: 'susan' },
  { id: 4, name: 'anna' },
]

type Person = {
  id: number
  name: string
}
export default function ContextAPI() {
  const [people, setPeople] = useState(PEOPLES)
  function removePerson(id: number) {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    })
  }

  return (
    <section>
      <h3>prop drilling</h3>
      <List people={people} removePerson={removePerson} />
    </section>
  )
}

type ListProps = {
  people: Person[]
  removePerson: (id: number) => void
}

function List({ people, removePerson }: ListProps) {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        )
      })}
    </>
  )
}

type SinglePersonProps = {
  id: number
  name: string
  removePerson: (id: number) => void
}
function SinglePerson({ id, name, removePerson }: SinglePersonProps) {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  )
}
