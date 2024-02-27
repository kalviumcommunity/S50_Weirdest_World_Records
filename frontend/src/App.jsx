import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SignupForm from './components/SignupForm';
import AboutPage from './components/AboutPage';
import ServicePage from './components/ServicePage';
import ContactPage from './components/ContactPage';
import MainPage from './components/Mainpage';
import UpdateRecord from './components/updateRecord';

function App() {
  return (
    <div className='home-bg'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignupForm />} />
        <Route path='/aboutpage' element={<AboutPage />} />
        <Route path='/servicepage' element={<ServicePage />} />
        <Route path='/contactpage' element={<ContactPage />} />
        <Route path='/mainpage' element={<MainPage />} />
        <Route path='/update/:id' element={<UpdateRecord/>} />
      </Routes>
    </div>
  );
}

export default App;
