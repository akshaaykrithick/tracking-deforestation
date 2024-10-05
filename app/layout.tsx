import type { Metadata } from "next"
import { Inter } from "next/font/google"

import TRPCProvider from "./_trpc/Provider"
import "./globals.css"
import { auth } from "@/auth"
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs"
import { SessionProvider } from "next-auth/react"

import { ToastProvider } from "@/components/provider/toaster-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Create T3 App Upgraded",
  description: "Generated by create-t3-app-upgraded",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  return (
    <ClerkProvider>
      <TRPCProvider>
        <html lang="en">
          <body className={inter.className}>
            <ToastProvider />
            <div className="h-full">{children}</div>
            {children}
          </body>
        </html>
      </TRPCProvider>
    </ClerkProvider>
  )
}
