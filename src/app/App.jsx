import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/auth/login/LoginPage'
import AuthPage from '../pages/auth/newauth/AuthPage'
import Home from '../pages/Home/Home'

const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/authPage' element={<AuthPage/>}/>
            <Route path='/loginPage' element={<LoginPage/>}/>
        </Routes>
    </div>
  )
}

export default App