import Link from 'next/link'

function Header() {
  return (
    < div className='header'>
      <Link href='/' >
        <img src="/globe.svg" width={30} height={30} alt="" />
      </Link>
      <h1 className='header-tittle'> La Renovacion</h1>
    </div>
  )
}

export default Header
