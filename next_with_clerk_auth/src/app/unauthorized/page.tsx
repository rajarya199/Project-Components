"use client"

import Link from "next/link"
import { ShieldAlert } from "lucide-react"

export default function UnauthorizedPage() {
  return (
    <main className="min-h-screen w-full bg-white flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Icon */}
        <div className="flex justify-center">
          <ShieldAlert className="w-16 h-16 text-black" strokeWidth={1.5} />
        </div>

        <div className="space-y-2">
          <h1 className="text-8xl font-bold tracking-tighter text-black">
            403
          </h1>
          <h2 className="text-3xl font-bold tracking-tight text-black">
            Access Denied
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto pt-2">
            You don't have permission to access this resource. Please contact
            your administrator if you believe this is an error.
          </p>
        </div>

        <div>
               <Link
          href="/"
          className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 active:scale-95"
        >
          Go Back Home
        </Link>
       
        </div>
      </div>
    </main>
  )
}
