import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Layouts/Header/Header'
import { Main } from './components/Layouts/Main/Main'
import Filter from './components/Filter/Filter'
import Tasks from './components/Tasks/Tasks'
import { Footer } from './components/Layouts/Footer/Footer'
import { TasksContext } from './components/Context/Context'
import NewTasks from './components/NewTasks/NewTasks'



function App() {

  
 
  

  return (
    <>
      <Header>
        <h1 className='Title'>Lista de Tareas</h1>
        <img className='logo' src={reactLogo}/>
      </Header>
      <Main>
        <NewTasks/>
      <h2 id='pendingandDone'>Usted tiene 2 tareas completadas y 2 tareas pendientes.</h2>
      <hr />
      <Filter/>
      <div className='TasksContainer'>
      <Tasks />
      </div>
    </Main>
    <Footer/>
    </>
    
  )
}

export default App
