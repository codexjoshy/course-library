import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex-between text-white max-md:flex-col py-12 gap-y-10 px-20 bg-black-100 border-t border-black-400 w-full body-text items-center'>
      <p>copyright @ {new Date().getFullYear()}</p>
      <div className='flex gap-x-9'>
        <Link href="/terms">
          Terms and conditions
        </Link>
        <Link href="/terms">
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
}

export default Footer