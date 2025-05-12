import React from 'react'
import Image from 'next/image';
import Abouticon from '@/components/images/Vector-2.png'

const About = () => {
  return (
    <Image className = "" src = {Abouticon} alt = "About" unoptimized></Image>
  )
}

export default About