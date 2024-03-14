import React from 'react';
import './itemtask.css'

const ItemTask = ({ task }) => {
    const circleStyle = {
        margin: '0.7rem 1rem 0 4rem',
        width: '2.2rem',
        height: '2.2rem',
        borderRadius: '50%',
        marginRight: '10px',
        backgroundColor: task.checkpoint ? '#1ca80f' : '#ac740e',
      };
  return (
    <li className="task-item">
      <div className='infoTasks'>
      <div style={circleStyle}></div>
      <h3 className='taskTitle'>{task.title}</h3>
      <p className='descriptionTask'>{task.description}</p>
      </div>
        
      <div className='checksContainer'>
      <input className='checks' type="checkbox" checked={task.checkpoint}  />
      </div>
      
    </li>
  );
};

export default ItemTask;

