import React from 'react'

export default function Nav() {
  return (
    <div>
      <nav className='border bg-fuchsia-400'>
        <ul>
          <li className='bg-red-500'><a href="">Computadoras</a></li>
          <li><a href="">Laptos</a>
            <ul>
              <li><a href="">Computadoras</a></li>
              <li><a href="">Computadoras</a></li>
            </ul>
          </li>
        </ul>
      </nav>


    </div>
  )
}


