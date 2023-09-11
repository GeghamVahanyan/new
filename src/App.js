import { useState } from 'react'
import './App.css';
import TodoForm from './TodoForms';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';

function App() {
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      title: 'Learn HTML',
      isComplated: false
    },
    {
      id: Math.random(),
      title: 'Learn CSS',
      isComplated: false
    },
    {
      id: Math.random(),
      title: 'Learn JS',
      isComplated: false,
    }
  ])
  return (
    <div className="App">
      <div className='sec'>
      <TodoForm onAdd={(text) => {
        setTodos([
          ...todos, {
            id: Math.random(),
            title: text,
            isComplated: false
          }
        ])
      }} />
      <TodoList
        todos={todos}
        onDelete={(todo) => {
          setTodos(todos.filter((t) => t.id !== todo.id))
        }}
        onChange={(newTodo) => {
          setTodos(todos.map((todo) => {
            if (todo.id === newTodo.id) {
              return newTodo;
            }
            return todo;
          }));
        }}
      />
      <TodoFooter todos={todos} onClearCompleted={() => {
        setTodos(todos.filter((todo) => !todo.isComplated))
      }} />
      </div>
    </div>
  );
}

export default App;
