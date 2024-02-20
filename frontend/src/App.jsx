import { useState } from 'react'
import { Route, Routes,Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Mainpage from './components/Mainpage'
import React from 'react'

function App() {

  return (
    <div className='home-bg'>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mainpage' element={<Mainpage/>}/>
      </Routes>


      </div>
  )
}

export default App
