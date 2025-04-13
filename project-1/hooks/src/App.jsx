import { useState } from 'react'
import './App.css'
import Login from './pages/auth/login/login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from './pages/auth/registration/registration';
import RegistrationCopy from './pages/auth/registration/registrationCopy';
import Profile from './pages/auth/profile_details/profile';
import List from '../src/pages/cms/list'
import Create from './pages/cms/create';


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/auth/register' element={<Registration />}/>
        {/* <Route path='/auth/register' element={<RegistrationCopy />}/> */}
        <Route path='/auth/profile' element={<Profile/>}/>
        <Route path='/cms/list' element={<List/>}/>
        <Route path='/cms/create' element={<Create/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
