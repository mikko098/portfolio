import React from 'react'
import Image from 'next/image';
import BButton from "@/components/images/buttonbfigma.png";

const Bbutton = () => {
  return (
    <Image className = "mb-[10vh] mr-[0.5vw] w-[var(--icon-laptop)]" src = {BButton} alt = "Bbutton" unoptimized></Image>
  )
}

export default Bbutton