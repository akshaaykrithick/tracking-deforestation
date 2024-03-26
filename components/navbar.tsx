import React from "react"

import { LogoutButton } from "./auth/logout-button"
import { Button } from "./ui/button"

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
  return (
    <div className="fixed inset-x-0 z-50 flex h-10 items-center justify-between border-b border-b-black bg-white">
      <div className="flex h-full items-center justify-around">
        {routes.map((route, index) => (
          <a key={index} href={route.path}>
            {route.name}
          </a>
        ))}
      </div>
      <Button>
        <LogoutButton>Logout</LogoutButton>
      </Button>
    </div>
  )
}

export default Navbar
