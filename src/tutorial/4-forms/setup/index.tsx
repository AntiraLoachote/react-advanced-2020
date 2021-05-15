import React, { ChangeEvent, useState, SyntheticEvent } from 'react'

// Requirement:
// User want to add person form (Reqiured: First name, email input and age)
// User want to see people info (First name, email and age).

export default function SimpleFormSetup() {
  return (
    <>
      <form className="form">
        <div className="form-control">
          <label>First name : </label>
          <input type="text" name="firstName" />
        </div>
        <div className="form-control">
          <label>Email : </label>
          <input type="text" name="email" />
        </div>
        <div className="form-control">
          <label>Age : </label>
          <input type="number" name="age" />
        </div>
        <button type="submit">add person</button>
      </form>
      {/* <PeopleList people={people} /> */}
    </>
  )
}
