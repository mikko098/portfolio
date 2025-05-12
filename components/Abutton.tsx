import React from 'react'
import Image from 'next/image';
import Abutton from "@/components/images/A-button2.png";

const AButton = () => {
  return (
    <Image className = "w-[var(--spacing-unit)]" src = {Abutton} alt = "Abutton" unoptimized></Image>
  )
}

export default AButton