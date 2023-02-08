import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Signup from '../pages/signup/index'


/* components */


export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
    </div>
  )
}
