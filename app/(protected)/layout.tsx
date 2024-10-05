import React from "react"
import { redirect } from "next/navigation"


import Navbar from "@/components/navbar"
import { currentUser } from "@clerk/nextjs/server"

const layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await currentUser()
  if (!user) {
    redirect("/auth/login")
  }
  return (
    <div className="h-full w-full">
      <Navbar />
      <div className="h-full w-full pt-12">{children}</div>
    </div>
  )
}

export default layout
