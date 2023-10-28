import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
      <div>
          <nav>
              <ul className='flex justify-center bg-cyan-50'>
                  <Link className='p-5 text-xl font-bold cursor-pointer hover:scale-105' href='/'>Home</Link>
                  <Link className='p-5 text-xl font-bold cursor-pointer hover:scale-105' href='/about'>About us</Link>
                  <Link className='p-5 text-xl font-bold cursor-pointer hover:scale-105' href='/contact'>Contact us</Link>
              </ul>
          </nav>
    </div>
  )
}

export default Navbar