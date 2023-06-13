import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'

const AuthRouter = () => {
  return (
    <Routes>
      <Route path='login' element={<Login/>}/>  
      <Route path='register' element={<Register/>}/> 
      <Route path='/*' element={ <Navigate to="/auth/login" /> }/> 
    </Routes>
  )
}

export default AuthRouter