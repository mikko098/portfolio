import React from 'react'
import Image from 'next/image';
import cleanedPsyduck from "@/components/images/cleanedpsyduck.gif";

const Psyduck = () => {
  return (
    <div><Image className = "absolute w-[5vw] left-[58vw] top-[1.7vw] group" src = {cleanedPsyduck} alt = "Psyduck" unoptimized></Image></div>
  )
}

export default Psyduck