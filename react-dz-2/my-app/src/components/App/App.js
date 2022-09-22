import './App.css';
import Todo from '../Todo/Todo'
import TaskContext from '../context/TaskContext';
import {useState} from 'react'

function App() {
  const [tasks, setTasks] = useState([])

  return (
    <div className='App'>
      <TaskContext.Provider value={{tasks, setTasks}}>
        <Todo/>
      </TaskContext.Provider>
    </div>

  );
}

export default App;
