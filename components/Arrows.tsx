import React from 'react'
import Image from 'next/image';
import arrows from '@/components/images/arrows.png'

const Arrows = () => {
  return (
    <Image className = "w-[5vw]" src = {arrows} alt = "About" unoptimized></Image>
  )
}

export default Arrows