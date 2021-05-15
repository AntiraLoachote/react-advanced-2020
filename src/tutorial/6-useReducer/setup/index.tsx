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
  const initialState: FruitState = {
    fruits: [],
    toastMessage: '',
    isToastOpen: false,
  }

  const [name, setName] = useState('')

  function handleSubmit(e: SyntheticEvent): void {
    e.preventDefault()
  }

  return (
    <>
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
      {/* <FruitItems fruits={} remove={} /> */}
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
    }, 2000)
  })
  return (
    <div className="modal">
      <p>{message}</p>
    </div>
  )
}
