import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthRouter from '../auth/routes/AuthRouter'
import JournalRoutes from '../journal/routes/JournalRoutes'

const AppRouter = () => {
  return (
    <Routes>
       <Route path='/auth*' element={<AuthRouter/>}/> 
       <Route path='/*' element={<JournalRoutes/>}/> 
    </Routes>
  )
}

export default AppRouter