import {useState} from "react"
import './App.css';

function App() {
  const [tasks, setTasks] = useState ([])
  const [inputText, setInputText] =useState("")
  const updateInput =(event) =>{
    setInputText(event.target.value)
  }
  const addTask = (event) => {
    let arr = [...tasks]
    arr.push(inputText)
    setTasks(arr)
    setInputText("")
  }
  const removeTask =(index) => {
    let currentTasks =[...tasks]
    currentTasks.splice(index, 1)
    setTasks(currentTasks)
  }
  return (
    <div className='form'>
          <h1>MY TO DO LIST</h1>
           <input onChange={updateInput}/>
           <button onClick={addTask}>Add Task</button>
           <h2>{inputText}</h2>
           {tasks.map((item, index) => {
              return (
             <>
              <h1>{item}</h1>
             <button onClick={removeTask}>remove</button>
             </>)
          })}
    </div>
);
 
}
export default App;
