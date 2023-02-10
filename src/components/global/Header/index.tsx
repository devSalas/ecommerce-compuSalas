import React from 'react'
import BtnCarrito from './BtnCarrito'
import BtnMeGusta from './BtnMeGusta'
import BtnSession from './BtnSession'
import Buscador from './Buscador'


export default function Header() {

  
  return (
    <>
      <header className='flex items-center justify-between gap-8 md:p-8 p-4 border-b-2'>

        <h2 className='text-2xl md:block hidden font-bold'>Compu<span className='text-blue-600'>Salas</span></h2>

        <Buscador/>

        <section className='gap-8 md:flex hidden'>
          <BtnSession />
          <BtnMeGusta />
          <BtnCarrito />
        </section>

      </header>

      <nav className='fixed md:hidden bottom-0 w-full h-16 flex items-center justify-center border bg-white'>
        <section className='gap-8 flex'>
          <BtnMeGusta />
          <BtnCarrito />
          <BtnSession />
        </section>
      </nav>
    </>
    
  )
}
