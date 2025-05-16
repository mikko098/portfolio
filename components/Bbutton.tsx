import React from 'react'
import Image from 'next/image';
import BButton from "@/components/images/buttonbfigma.png";

const Bbutton = () => {
  return (
    <Image className = "w-[var(--icon-laptop)]" src = {BButton} alt = "Bbutton" unoptimized></Image>
  )
}

export default Bbutton