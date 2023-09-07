import{useState} from 'react'
import './App.css';
import TodoForm from './TodoForms';
import TodoList from './TodoList';

function App() {
    const[todo,setTodo]=useState([
      {
      id:Math.random(),
      title:'Learn HTML',
      isComplated:false
      },
      {
      id:Math.random(),
      title:'Learn CSS',
      isComplated:false
      },
      {
      id:Math.random(),
      title:'Learn JS',
      isComplated:false,
      }
  ])
  return(
    <div className="App">
      <TodoForm />
      <TodoList todo={todo} />
    </div>
  );
}

export default App;
