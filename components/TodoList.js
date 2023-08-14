import Todo from './Todo'
import './TodoList.css'

function TodoList({ addTodo, deleteTodo, toggleTodo }) {
  return (
    <div className="todoList">
      {!addTodo.length && <h3 className="emptyList">Задач нет</h3>}
      {addTodo.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        ></Todo>
      ))}
    </div>
  )
}

export default TodoList
