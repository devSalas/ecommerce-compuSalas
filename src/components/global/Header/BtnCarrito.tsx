import React from 'react'
import Contador from './Contador'
import Carrito from '../../icons/Carrito'



export default function BtnCarrito() {
  return (
    <button className='flex items-center gap-6'>
      <div className='relative'>
        <Carrito />
        <Contador numero={0} />
      </div>
      <div className='text-left md:block hidden'>
        <p className='text-slate-500 text-sm'>Total</p>
        <p className='font-semibold'>$0.00</p>
      </div>
    </button>
  )
}
