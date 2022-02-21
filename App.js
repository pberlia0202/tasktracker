import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from 'react'

function App() {
  const [showAddTask,setShowAddTask] = useState(true)
  const [tasks,setTasks] = useState( [
    {
      id:1,
      text:'Doctors Appointment',
      day:'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id:2,
      text:'Meeting At school',
      day:'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id:3,
      text:'Food shopping',
      day:'Feb 5th at 2:30pm',
      reminder: false,
    },
  ])
  //Add task
  const addTask = (task) => {
    const id=Math.floor(Math.random()*10000)+1
    const newTask ={id,...task}
    setTasks([...tasks,newTask])
  }
  //Delete task
  const deleteTask = (id) => {
    //console.log('delete',id)
    setTasks(tasks.filter((task) => task.id!==id))
  }

  // toggle reminder
  const toggleReminder = (id) => {
    // console.log(id)
    setTasks(tasks.map((task) => task.id===id ? {...task, reminder: !task.reminder}:task))
  }

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask &&<AddTask onAdd={addTask}/>}
      {tasks.length>0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle ={toggleReminder}/>
      ) : ('No tasks to show')}
    </div>
    
  );
}
// class App extends React.Component{
//     render() {
//         return <h1>Hello from class</h1>
//     }
// }

export default App;
