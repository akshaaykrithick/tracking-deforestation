"use client"

import Link from "next/link"
import {
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
  useUser,
} from "@clerk/nextjs"

import { LogoutButton } from "@/components/auth/logout-button"
import { trpc } from "@/app/_trpc/client"
import { Button } from "@/components/ui/button"

export default function Home() {
  const hello = trpc.test.useQuery()
  const user = useUser()
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          <span className="text-[hsl(280,100%,70%)]">
            Tracking Deforestation
          </span>
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8"></div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center text-2xl text-white">
              {user && <span>Logged in as {user?.user?.fullName}</span>}
            </p>
            <div>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
                <Link href="/forest">
                  <Button className="text-white">Forest Reserves</Button>
                </Link>
              </SignedIn>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
