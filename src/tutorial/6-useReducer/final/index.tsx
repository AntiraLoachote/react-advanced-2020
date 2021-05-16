import React, { useEffect, useState, SyntheticEvent, useReducer } from 'react'
import { fruitsReducer } from './reducer'

// Requirement:
// Fruit name form can add name
// - show success toast with name
// - show error toast when name blank

// Show Fruit list
// Can remove fruit from list - show remove toast
//

// 1) Define action
// add item
// remove item
// show toast 1) error message 2) success message
// auto close toast

// 2) Reducer - switch case to do action
// 3) Store - has state

export type FruitState = {
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
  const [state, dispatch] = useReducer(fruitsReducer, initialState)

  function handleSubmit(e: SyntheticEvent): void {
    e.preventDefault()

    if (name === '') {
      dispatch({ type: 'SHOW_TOAST_ERROR', payload: 'Please add name !' })
    } else {
      dispatch({ type: 'ADD_FRUIT', payload: name })
      setName('')
    }
  }

  function removeFruit(name: string) {
    dispatch({ type: 'REMOVE_FRUIT', payload: name })
  }

  function closeModal() {
    dispatch({ type: 'CLOSE_TOAST_ERROR' })
  }

  return (
    <>
      {state.isToastOpen && (
        <Toast message={state.toastMessage} closeModal={closeModal}></Toast>
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
      <FruitItems fruits={state.fruits} removeFruit={removeFruit} />
    </>
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
