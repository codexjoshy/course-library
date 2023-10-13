import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
 return (
  <nav className='flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 py-7 text-white bg-black-200'>
   <div className="w-full flex-between max-w-screen-2xl mx-auto px-6 ">
    <Link href={'/'}>
     <Image width={55} height={40} src='/jsm-logo.svg' alt={'logo'} />
    </Link>
    {/* hamburger */}
    <Image width={30} height={30} src="/hamburger-menu.svg" alt='hamburger-menu' className='block md:hidden' />

    {/* links */}
    <ul className='max-md:hidden flex-center gap-x-3 md:gap-x-10 cursor-pointer'>
     <li className='body-text text-gradient_blue-purple !font-bold'>
      <Link href="https://jsmastery.pro/next13" target='_blank'>Project</Link>
     </li>
     <li className='body-text  !font-normal'>
      <Link href="/home">Home</Link>
     </li>
     <li className='body-text  !font-normal'>
      <Link href="/home">About</Link>
     </li>
    </ul>
   </div>
  </nav>
 )
}

export default Navbar