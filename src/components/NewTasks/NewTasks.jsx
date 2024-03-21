
import React, { useState, useContext } from 'react';
import { TasksContext } from '../Context/Context';


function NewTasks() {
  const { tasks, setTasks } = useContext(TasksContext);

  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    
    const newTask = {
      id: tasks.length + 1,
      title: newTaskTitle,
      description: newTaskDescription,
      checkpoint: false,
    };
    setTasks([...tasks, newTask]);
    
  };

  return (
    <form  className='createContainer'>
      <h3>Titulo de la tarea:</h3>
      <input
        type='text'
        className='inputTask'
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      />
      <h3>Descripcion de la tarea:</h3>
      <input
        type="text"
        className='inputTask'
        value={newTaskDescription}
        onChange={(e) => setNewTaskDescription(e.target.value)}
      />
      <button onClick={handleClick} className='createTask'>Crear</button>
    </form>
  );
}

export default NewTasks;
