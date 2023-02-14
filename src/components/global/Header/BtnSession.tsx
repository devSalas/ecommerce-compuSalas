import React from 'react'
import User from '../../icons/Usuario'


export default function BtnSession() {
  return (
    <button className=' flex items-center gap-2'>
      <User />
      <div className='text-left md:block hidden'>
        <p className='text-slate-500 text-sm'>Login</p>
        <p className='font-semibold'>Account</p>
      </div>
    </button>
  )
}
