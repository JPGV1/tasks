import React, { useContext } from 'react'
import './tasks.css'
import ItemTask from '../itemTask/ItemTask';
import { TasksContext } from '../Context/Context';


const Tasks = ({  }) => {
  const {tasks} = useContext(TasksContext)
  return (
    <ul className="tasks-list">
      {tasks.map((task) => (
        <ItemTask key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default Tasks;


