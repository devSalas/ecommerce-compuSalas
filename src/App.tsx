import { useEffect, useState } from 'react'
import Router from './router/index'

type prop={
  nombre:String
}

function App(){

  return (
      <div>
        <Router/>
      </div>
  )
}

export default App
