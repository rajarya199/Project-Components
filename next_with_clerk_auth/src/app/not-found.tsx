'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function NotFound() {
  const pathname = usePathname()
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* Illustration */}
        <div className="mx-auto h-32 w-32">
          <div className="h-full w-full bg-linear-to-r from-orange-500 to-rose-500
 rounded-2xl flex items-center justify-center shadow-2xl">
             {/* <Image
              src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble-404.png"
              alt="404 illustration"
              fill
              style={{ objectFit: 'contain' }}
              className="rounded-xl"
            /> */}
              <svg 
              className="h-16 w-16 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-6xl font-black text-gray-900 tracking-tight">
            404
          </h1>
          <p className="text-2xl font-semibold text-gray-900">
            Page Not Found
          </p>
          <p className="text-lg text-gray-600 max-w-sm mx-auto">
            The page <code className="bg-gray-100 px-2 py-1 rounded font-mono text-sm">
              {pathname}
            </code> could not be found.
          </p>
        </div>

        <div className="pt-6 space-y-3 space-x-2">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            ← Back to Home
          </Link>
          <Link
            href="/sign-in"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
          >
            Go to Sign In
          </Link>
        </div>

       
      </div>
    </div>
  )
}
