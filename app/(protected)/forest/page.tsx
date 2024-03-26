import React from "react"
import Image from "next/image"
import Link from "next/link"

const page = () => {
  return (
    <Link href={"https://wii.gov.in/wildlife_sanctuaries"}>
      <Image
        src={"/forest.png"}
        alt="forest"
        width={1600}
        height={1400}
        className="max-h-full max-w-full object-cover"
      />
    </Link>
  )
}

export default page
