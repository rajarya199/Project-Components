'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Users, Calendar, Settings, LayoutDashboard, Menu, X, ArrowLeft } from 'lucide-react'
import { useState } from 'react'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-indigo-50">
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside
          className={`
            fixed md:static inset-y-0 left-0 z-50 w-72 bg-white/80 backdrop-blur-xl
            border-r border-slate-200 shadow-xl
            transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
            md:translate-x-0 transition-transform duration-300
          `}
        >
          <div className="p-4 border-b">
            <h2 className="text-2xl font-bold bg-linear-to-r p-2 from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Admin Panel
            </h2>
            <Link
    href="/"
    className="flex items-center gap-1 text-sm font-medium  text-slate-600
               hover:text-indigo-600 justify-end transition-colors"
  >
    <ArrowLeft size={18} />
    Back to Home
  </Link>
          </div>

          <nav className="p-4 space-y-2">
            {/* <NavItem href="/" icon={<Home size={20} />} pathname={pathname} onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </NavItem> */}
            <NavItem href="/dashboard" icon={<LayoutDashboard size={20} />} pathname={pathname} onClick={() => setIsMobileMenuOpen(false)}>
              Overview
            </NavItem>
            <NavItem href="/dashboard/users" icon={<Users size={20} />} pathname={pathname} onClick={() => setIsMobileMenuOpen(false)}>
              Users
            </NavItem>
            <NavItem href="/dashboard/events" icon={<Calendar size={20} />} pathname={pathname} onClick={() => setIsMobileMenuOpen(false)}>
              Events
            </NavItem>
            <NavItem href="/dashboard/settings" icon={<Settings size={20} />} pathname={pathname} onClick={() => setIsMobileMenuOpen(false)}>
              Settings
            </NavItem>
          </nav>
        </aside>

        {/* Mobile Toggle */}
        <button
          className="fixed top-6 left-6 z-50 md:hidden p-2 rounded-xl bg-white shadow"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Main */}
        <main className="flex-1 p-6 ">{children}</main>
      </div>
    </div>
  )
}

function NavItem({
  href,
  icon,
  children,
  pathname,
  onClick,
}: {
  href: string
  icon: React.ReactNode
  children: React.ReactNode
  pathname: string
  onClick?: () => void
}) {
  const active = pathname === href || pathname.startsWith(`${href}/`)

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition
        ${active
          ? 'bg-linear-to-r from-indigo-500 to-purple-600 text-white shadow'
          : 'text-slate-700 hover:bg-indigo-50'}
      `}
    >
      <span className="p-2 rounded-lg bg-white/20">{icon}</span>
      {children}
    </Link>
  )
}
