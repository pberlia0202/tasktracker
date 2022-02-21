import PropTypes from 'prop-types'
import Task from './Task'

const Tasks = ({tasks , onDelete, onToggle}) => {
    return (
    <>
      {tasks.map((task)=>(
      <Task key={task.id} task={task} 
        onDelete={() =>onDelete(task.id)}
        onToggle={() =>onToggle(task.id)}/>

      ))}
    </>
  
  )
}

Tasks.propTypes = {
  id: PropTypes.number,
  reminder: PropTypes.bool
}

export default Tasks
