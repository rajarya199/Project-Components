import React from 'react'
import { SignIn,SignedOut,SignInButton,UserButton ,SignedIn,useUser} from '@clerk/nextjs'
import Link from 'next/link'
import NavItems from './NavItems'
const Navbar = () => {
  return (
    <header className='w-full border-b'>
             <div className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-5 w-full flex items-center justify-between">
        <Link href="/" className='w-36 font-poppins text-xl px-3'>
         </Link>
         <nav className='md:flex justify-between  hidden w-full max-w-xs'>
          <NavItems/>
  
        </nav>
        </div>
      
    </header>
  )
}

export default Navbar
