import React from 'react'

// Requirement:
// User want to add person form (Reqiured: First name, email input and age)
// User want to see people info (First name, email and age).
// Can add duplicate First name or email

const ControlledInputs = () => {
  return (
    <>
      <form className="form">
        <div className="form-control">
          <label>First name : </label>
          <input type="text" name="firstName" />
        </div>
        <button type="submit">add person</button>
      </form>
    </>
  )
}

export default ControlledInputs
