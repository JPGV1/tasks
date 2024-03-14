import React from 'react'
import { Header } from './components/Layouts/Header/Header'
import { Main } from './components/Layouts/Main/Main'
import Filter from './components/Filter/Filter'
import Tasks from './components/Tasks/Tasks'
import { Footer } from './components/Layouts/Footer/Footer'
import reactLogo from './assets/react.svg'
export const Home = () => {
    const tasks = [
        {
          id: 1,
          title: 'Hacer Ejercicio:',
          description: 'Realizar rutina asignada en el gym.',
          checkpoint: false,
        },
        {
          id: 2,
          title: 'Leer Libro:',
          description: 'Pagina 70 100 años de soledad.',
          checkpoint: true,
        },
        {
          id: 3,
          title: 'Realizar el aseo:',
          description: 'Realizar la lista de quehaceres pendiente.',
          checkpoint: false,
        },
        {
          id: 4,
          title: 'Tomar café:',
          description: 'Asistir al café a las 4:00 pm.',
          checkpoint: true,
        },
      ];
  return (
    <>
      <Header>
        <h1 className='Title'>Lista de Tareas</h1>
        <img className='logo' src={reactLogo}/>
      </Header>
      <Main>
        <div className='createContainer'>
        <h3>Titulo de la tarea:</h3>
      <input 
      type='text' 
      className='inputTask'
      />
      <h3>Descripcion de la tarea:</h3>
      <input 
      type="text"
      className='inputTask'/>
      <button className='createTask'> Crear</button>
        </div>
      <h2>Usted tiene 2 tareas completadas y 2 tareas pendientes.</h2>
      <hr />
      <Filter/>
      <div className='TasksContainer'>
      <Tasks tasks={tasks} />
      </div>
    </Main>
    <Footer/>
    </>
  )
}
