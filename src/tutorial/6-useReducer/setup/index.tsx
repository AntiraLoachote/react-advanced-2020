import React, { useEffect, useState, SyntheticEvent } from 'react'

// Requirement:
// Fruit name form can add name
// - show success toast with name
// - show error toast when name blank
// Show Fruit list
// Can remove fruit from list
// - show remove toast

// Create Reducer
// 1) Define action
// add item
// remove item
// show toast 1) error message 2) success message
// auto close toast
// 2) Reducer - switch case to do action
// 3) Store - has state

type FruitState = {
  fruits: string[]
  toastMessage: string
  isToastOpen: boolean
}

export default function Final() {
  // const initialState: FruitState = {
  //   fruits: [],
  //   toastMessage: '',
  //   isToastOpen: false,
  // }

  const [name, setName] = useState('')
  const [fruits, setFruits] = useState<string[]>([])
  const [toastMessage, setToastMessage] = useState('')
  const [isToastOpen, setIsToastOpen] = useState(false)

  function handleSubmit(e: SyntheticEvent): void {
    e.preventDefault()

    if (name === '') {
      setIsToastOpen(true)
      setToastMessage('Please add name !')
    } else {
      setFruits([...fruits, name])
      setName('')
      setIsToastOpen(true)
      setToastMessage(`${name} added`)
    }
  }

  function removeFruit(name: string) {
    const newFruits = fruits.filter((fruit) => fruit !== name)
    setFruits(newFruits)
    setIsToastOpen(true)
    setToastMessage(`${name} removed`)
  }

  function closeModal() {
    setIsToastOpen(false)
  }

  return (
    <>
      {isToastOpen && (
        <Toast message={toastMessage} closeModal={closeModal}></Toast>
      )}
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Fruit Name : </label>
          <input
            type="text"
            name="firstName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit">add fruit</button>
      </form>
      <FruitItems fruits={fruits} removeFruit={removeFruit} />
    </>
  )
}

type ToastProps = {
  message: string
  closeModal: () => void
}

function Toast({ message, closeModal }: ToastProps) {
  useEffect(() => {
    setTimeout(() => {
      closeModal()
    }, 3000)
  })
  return (
    <div className="modal">
      <p>{message}</p>
    </div>
  )
}

type Props = {
  fruits: string[]
  removeFruit: (name: string) => void
}

function FruitItems({ fruits, removeFruit }: Props): JSX.Element {
  return (
    <>
      {fruits.map((name, index) => (
        <div key={index} className="item">
          <h4>
            {index + 1}) {name}
          </h4>
          <button onClick={() => removeFruit(name)}>remove</button>
        </div>
      ))}
    </>
  )
}
