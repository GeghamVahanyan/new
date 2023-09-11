import TodoItem from "./TodoItem"


function TodoList({todos,onDelete,onChange}) {
    return (
        <ul className="todoList">
            {todos.map((todo) => {
                return (
                    <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    onChange={onChange}
                    onDelete={onDelete}
                    />
                )
            })}
        </ul>
    )
}

export default TodoList