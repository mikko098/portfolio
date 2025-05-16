import React from 'react'
import Image from 'next/image';
import Abutton from "@/components/images/abutttonfigma.png";

const AButton = () => {
  return (
    <Image className = "mb-[10vh] w-[var(--icon-laptop)] mr-[0.5vw]" src = {Abutton} alt = "Abutton"></Image>
  )
}

export default AButton