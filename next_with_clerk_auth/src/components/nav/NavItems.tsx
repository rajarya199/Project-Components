"use client"
import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SignedIn} from "@clerk/nextjs"
import { headerLinks } from "@/constants"

type NavItemsProps = {
  onClick?: () => void
}

const NavItems = ({ onClick }: NavItemsProps) => {
  const pathname = usePathname()

  return (
    <ul className="flex flex-col md:flex-row gap-5 md:gap-8">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route

        // 🔐 Protected link → show only when signed in
        if (link.protected) {
          return (
            <SignedIn key={link.route}>
              <li
                className={`text-[16px] font-medium transition
                  ${isActive ? "text-[#624CF5]" : "text-slate-700 hover:text-teal-600"}
                `}
              >
                <Link href={link.route} onClick={onClick}>
                  {link.label}
                </Link>
              </li>
            </SignedIn>
          )
        }

        // 🌍 Public links
        return (
          <li
            key={link.route}
            className={`text-[16px] font-medium transition
              ${isActive ? "text-[#624CF5]" : "text-slate-700 hover:text-teal-600"}
            `}
          >
            <Link href={link.route} onClick={onClick}>
              {link.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavItems
