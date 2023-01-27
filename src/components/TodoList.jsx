import Todo from './Todo';

const TodoList = ({todos, handleDelete}) => {
    return (
      <div className="ul">
        {todos.map((todo)=> (
          <Todo key={todo.id} todo={todo} handleDelete={handleDelete}/>
        ))}
      </div>
    )
  }
  
export default TodoList;