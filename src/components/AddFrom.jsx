const AddFrom = ({todo, handleChange, handleClick}) => {
    return(
      <div className="addForm">
        <input className="input_name" value={todo} onChange={handleChange} type='text'/>
        <button className="button" onClick={handleClick}>Save Todo</button>
      </div>
    )
  }

export default AddFrom;