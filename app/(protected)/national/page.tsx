import React from "react"
import Image from "next/image"
import Link from "next/link"

const page = () => {
  return (
    <Link
      href={
        "https://www.theearthsafari.com/tour/list-of-national-parks-in-india"
      }
    >
      <Image
        src={"/national.png"}
        alt="national"
        width={1600}
        height={1400}
        className="max-h-full max-w-full object-cover"
      />
    </Link>
  )
}

export default page
