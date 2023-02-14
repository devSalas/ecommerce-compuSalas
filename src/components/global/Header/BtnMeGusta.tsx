import React from 'react'
import Contador from './Contador'
import Corazon from '../../icons/Corazon'



export default function BtnMeGusta() {
  return (
    <button >
      <div className='relative'>
        <Corazon/>
        <Contador numero={5} />
      </div>
    </button>
  )
}
