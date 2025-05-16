import React from 'react'
import Image from 'next/image';
import cleanedPsyduck from "@/components/images/cleanedpsyduck.gif";

const Psyduck = () => {
  return (
    <div><Image className = "origin-bottom left hover:scale-120 absolute w-[5vw] left-[58vw] top-[11.2vh] group" src = {cleanedPsyduck} alt = "Psyduck" unoptimized></Image></div>
  )
}

export default Psyduck