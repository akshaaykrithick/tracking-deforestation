"use client"

import Link from "next/link"

import { useCurrentUser } from "@/hooks/use-current-user"
import { trpc } from "@/app/_trpc/client"

export default function Home() {
  const hello = trpc.test.useQuery()
  const user = useCurrentUser()
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
              {user && <span>Logged in as {user?.name}</span>}
            </p>
            <div>
              {!user && (
                <Link
                  href={user ? "/api/auth/signout" : "/api/auth/signin"}
                  className="mr-2 rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
                >
                  {user ? "Sign out" : "Sign in"}
                </Link>
              )}
              <Link
                href={!user ? "/api/auth/signout" : "/api/auth/signin"}
                className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
              >
                {!user ? "Sign out" : "Sign in"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
