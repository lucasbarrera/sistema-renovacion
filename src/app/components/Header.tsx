import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    < div className='flex justify-evenly items-center p-4 bg-pink-200 '>
      <Link href='/' >
        <img src="/globe.svg" width={25} height={25} alt="" />
      </Link>
      <h1 className='text-2xl text-fuchsia-500'> La Renovacion</h1>
    </div>
  )
}

export default Header
