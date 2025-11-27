import React from 'react'
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Layout from '../layout/Layout'
import Profile from '../pages/Profile'
import ProtectedRoute from './ProtectedRoute'
const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
       <Route index element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<ProtectedRoute><Profile/> </ProtectedRoute>}/>
      </Route>
       
    </Routes>
      
    </BrowserRouter>
  )
}

export default AppRoutes
