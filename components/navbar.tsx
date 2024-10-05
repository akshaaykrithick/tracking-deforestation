"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

import { LogoutButton } from "./auth/logout-button"
import { Button } from "./ui/button"
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs"

const routes = [
  {
    name: "National Reserves",
    path: "/national",
  },
  {
    name: "Forest Reserves",
    path: "/forest",
  },
  {
    name: "Complaint-box",
    path: "/complaint",
  },
  {
    name: "Satellite",
    path: "/satillite",
  },
]

const Navbar = () => {
  const pathname = usePathname()
  return (
    <div className="fixed inset-x-0 z-50 flex h-12 items-center justify-between border-b border-b-black bg-white px-2">
      <div className="flex h-full items-center gap-4">
        <Link href={"/"}>
          <Image src="/next.svg" alt="logo" width={50} height={50} />
        </Link>
        {routes.map((route, index) => (
          <Link
            key={index}
            href={route.path}
            className={cn(
              "rounded-md bg-gray-100 px-1",
              pathname.includes(route.path) && "bg-gray-200 text-blue-500"
            )}
          >
            {route.name}
          </Link>
        ))}
      </div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  )
}

export default Navbar
