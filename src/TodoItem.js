

function TodoItem({ todo, onChange, onDelete }) {
    return (
        <div >
            <label className="todoItem">
                <input type="checkbox" className="checkbox" checked={todo.isCompleted} onChange={(e)=>{
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    })
                }}/>
                {todo.title}
                <button className="xBtn" onClick={()=>{
                    onDelete(todo)
                }}>X</button>
            </label>
        </div>
    )
}

export default TodoItem;