'use client'
import React from 'react'
import Image from 'next/image';
import Githubicon from "@/components/images/Github-1.png.png";
import { playHoverSound, stopHoverSound } from '@/utils/playSound';

const Github : React.FC = () => {
  
  return (
    <div className='hover:scale-120' onMouseOver={playHoverSound} onMouseOut={stopHoverSound}>
      <a className = "col-start-1" href="https://github.com/mikko098" target = "_blank"> 
      <Image className = "" src = {Githubicon} alt = "Psyduck" unoptimized></Image></a>
      <p className= "font-(family-name:--font-pixelify) text-[#292929]"> github</p>
    </div>
  )
}

export default Github