import React from 'react'
import { icons } from "../../data/icons";
import Image from "next/image";


const page = () => {
  return (
    <div>
    <Image
      src="/user.svg"
      alt="Nithin"
      width={1080}
      height={1080}
      // placeholder="blur"
      className="w-3/4 ml-auto h-auto"
      priority
    /></div>
  )
}

export default page