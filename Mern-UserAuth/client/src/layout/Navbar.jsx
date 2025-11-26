import React, { useEffect, useState } from 'react'
import { Menu, X, User } from 'lucide-react'
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo and Name */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="text-xl md:text-2xl font-bold text-slate-900">
              MyApp
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-5 py-2.5 text-slate-700 font-medium hover:text-emerald-600 transition-colors">
              Login
            </button>
            <button className="px-5 py-2.5 bg-emerald-500 text-white font-medium rounded-lg hover:bg-emerald-600 transition-all shadow-sm hover:shadow-md">
              Register
            </button>
            <button className="ml-2 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors">
              <User className="w-5 h-5 text-slate-700" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <div className="px-4 pt-2 pb-4 space-y-3 bg-white/95 backdrop-blur-sm border-t border-slate-200">
          <button className="w-full px-5 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-lg transition-colors text-left">
            Login
          </button>
          <button className="w-full px-5 py-3 bg-emerald-500 text-white font-medium rounded-lg hover:bg-emerald-600 transition-all shadow-sm">
            Register
          </button>
          <button className="w-full px-5 py-3 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center space-x-3 transition-colors">
            <User className="w-5 h-5 text-slate-700" />
            <span className="text-slate-700 font-medium">Profile</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
