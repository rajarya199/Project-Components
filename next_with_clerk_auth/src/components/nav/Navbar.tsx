"use client"
import React ,{useState} from 'react'
import { SignedOut,UserButton ,SignedIn,useUser} from '@clerk/nextjs'
import Link from 'next/link'
import { Menu, X } from "lucide-react"
import NavItems from './NavItems'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
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
          {/* desktop */}
         <nav className='md:flex justify-between  hidden w-full max-w-xs'>
          <NavItems/>
  
        </nav>

        <div className='hidden md:flex items-center gap-4'>
   <SignedOut>
            <Link
              href="/sign-in"
              className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
            >
              Login
            </Link>
          </SignedOut>
             <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-9 h-9",
                },
              }}
            />
          </SignedIn>
        </div>

        {/* <SignedOut>
          <button className='px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition'>
            <Link href='/sign-in'>
            Login</Link>
            </button>
        </SignedOut>
        <SignedIn>
          <UserButton/>
        </SignedIn> */}

        {/* mobile menu */}
           <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md hover:bg-slate-100"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        </div>
        {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="flex flex-col gap-4 p-5">
            <NavItems onClick={() => setIsOpen(false)} />

            <SignedOut>
              <Link
                href="/sign-in"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
              >
                Login
              </Link>
            </SignedOut>

            <SignedIn>
              <div className="flex items-center gap-3">
                <UserButton />
              </div>
            </SignedIn>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
