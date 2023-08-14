import { useState } from 'react'

import '../UI/Button.css'
import './TodoForm.css'

function TodoForm({ addChange }) {
  const [text, setText] = useState('')
  const formSubmit = (event) => {
    event.preventDefault()
    addChange(text)
    setText('')
  }
  return (
    <form className="todoForm" onSubmit={formSubmit}>
      <input
        className="todoInput"
        value={text}
        placeholder="Enter new Todo"
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button className="todoButton" title="submit" type="submit">
        Submit
      </button>
    </form>
  )
}

export default TodoForm
