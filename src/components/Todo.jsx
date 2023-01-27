const Todo = ({todo, handleDelete}) => {
    return (
        <div className="li">
            <p className="p">{todo.label}<button className="fa-solid fa-trash" onClick={() => handleDelete(todo.id)}></button></p>   
        </div>
    )
  }
  
export default Todo;