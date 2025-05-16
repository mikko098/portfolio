'use client'
import {useState} from 'react'
import React from 'react'
import Image from 'next/image';
import Abouticon from '@/components/images/Vector-2.png'
import { playHoverSound, stopHoverSound } from '@/utils/playSound';
import AboutModal from './AboutModal';

const About = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleClick = () => {
      setShowModal(true)
    };

    const handleClose = () => {
      setShowModal(false)
    };

  return (
    <div className='hover:scale-120' onMouseOver={playHoverSound} onMouseOut={stopHoverSound}>
      <a className = "col-start-1" onClick={handleClick} > 
      <Image className = "" src = {Abouticon} alt = "About" unoptimized></Image> </a>
      <p className= "font-(family-name:--font-pixelify) text-[#292929]"> about</p>
      <AboutModal isOpen={showModal} onClose={handleClose} />
    </div>
  )
}

export default About