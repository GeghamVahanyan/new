

function TodoList(todo) {
    return(
        <ul>
            {todo.todo.map(e=>{
                return(
                    <li key={e.id}>{e.title}</li>
                )
            })}
        </ul>
    )
}

export default TodoList