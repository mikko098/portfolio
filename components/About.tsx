'use client'
import React from 'react'
import Image from 'next/image';
import Abouticon from '@/components/images/Vector-2.png'
import { playHoverSound, stopHoverSound } from '@/utils/playSound';

interface ModalProps {
    handleClick : () => void;
  }

const About: React.FC<ModalProps> = ({handleClick }) => {
    
  return (
    <div className='hover:scale-120' onMouseOver={playHoverSound} onMouseOut={stopHoverSound}>
      <a className = "col-start-1" onClick={handleClick} > 
      <Image className = "" src = {Abouticon} alt = "About" unoptimized></Image> </a>
      <p className= "font-(family-name:--font-pixelify) text-[#292929]"> about</p>
    </div>
  )
}

export default About