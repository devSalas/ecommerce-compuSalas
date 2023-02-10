import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from '../pages/login'
import Signup from '../pages/signup/index'


/* components */


export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  )
}
