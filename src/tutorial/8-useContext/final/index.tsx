import React, { useState, useContext } from 'react'

type Person = {
  id: number
  name: string
}

const PEOPLES: Person[] = [
  { id: 1, name: 'john' },
  { id: 2, name: 'peter' },
  { id: 3, name: 'susan' },
  { id: 4, name: 'anna' },
]

interface IContext {
  removePerson: (id: number) => void
  people: Person[]
}

const PersonContext = React.createContext<IContext>(null)

export default function ContextAPI() {
  const [people, setPeople] = useState(PEOPLES)
  function removePerson(id: number) {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    })
  }

  return (
    <PersonContext.Provider value={{ people, removePerson }}>
      <h3>Context API / useContext</h3>
      <List />
    </PersonContext.Provider>
  )
}

function List() {
  const { people } = useContext(PersonContext)

  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />
      })}
    </>
  )
}

type SinglePersonProps = {
  id: number
  name: string
}
function SinglePerson({ id, name }: SinglePersonProps) {
  const { removePerson } = useContext(PersonContext)

  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  )
}
