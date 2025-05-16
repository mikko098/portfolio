'use client'
import React from 'react'
import Image from 'next/image'
import Linkedinicon from '@/components/images/Linkedin2.png'
import { playHoverSound, stopHoverSound } from '@/utils/playSound'

const Linkedin = () => {
  return (
    <div className='hover:scale-120' onMouseOver={playHoverSound} onMouseOut={stopHoverSound}>
      <a className = "col-start-1" href="https://www.linkedin.com/in/mishal-nair-961843266/" target = "_blank"> 
     <Image className = "" src = {Linkedinicon} alt = "Psyduck" unoptimized></Image></a>
      <p className= "font-(family-name:--font-pixelify) text-[#292929]"> linkedin </p>
    </div>
  )
}

export default Linkedin