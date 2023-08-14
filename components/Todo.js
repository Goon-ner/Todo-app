import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div className={`${todo.isCompleted ? 'completeTodoItem' : 'todoItem'}`}>
      <RiTodoFill className="todoIcon" />
      <div className="todoText">{todo.text}</div>
      <RiDeleteBin2Line
        className="deleteIcon"
        onClick={() => deleteTodo(todo.id)}
      />
      <FaCheck className="checkIcon" onClick={() => toggleTodo(todo.id)} />
    </div>
  )
}
export default Todo
