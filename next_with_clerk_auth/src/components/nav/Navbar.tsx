import React from 'react'
import { SignIn,SignedOut,SignInButton,UserButton ,SignedIn,useUser} from '@clerk/nextjs'
import Link from 'next/link'
import NavItems from './NavItems'
const Navbar = () => {
  return (
    <header className='w-full border-b'>
             <div className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-5 w-full flex items-center justify-between">
         <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="text-xl md:text-2xl font-bold text-slate-900">
              MyApp
            </span>
          </Link>
         <nav className='md:flex justify-between  hidden w-full max-w-xs'>
          <NavItems/>
  
        </nav>
        <SignedOut>
        <SignInButton>
          <button className='px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition'>Login</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton/>
        </SignedIn>
        </div>
      
    </header>
  )
}

export default Navbar
