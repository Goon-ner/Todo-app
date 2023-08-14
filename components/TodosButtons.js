import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../UI/Button'

function TodosButtons({
  resetTodos,
  deleteTodos,
  disabled,
  completedTodosExist,
}) {
  return (
    <>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear completed todos"
        onClick={deleteTodos}
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </>
  )
}

export default TodosButtons
