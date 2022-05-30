// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useState} from 'react'

const UsernameForm = ({onSubmitUsername}) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        const value = e.target.elements[0].value
        onSubmitUsername(value)
      }}
    >
      <div>
        <label htmlFor="user">Username:</label>
        <input name="user" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

const App = () => {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return (
    <>
      <UsernameForm onSubmitUsername={onSubmitUsername} />
    </>
  )
}

export default App
