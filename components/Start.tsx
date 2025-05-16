import React from 'react'
import Image from 'next/image'
import Circlebutton from '@/components/images/circlebutton.png'

const Start = () => {
  return (
    <div className='flex flex-col items-center'>
        <p className= "scale-70 font-(family-name:--font-pixelify) text-[#999999]">START</p>
        <Image className = "scale-70 w-[var(--icon-laptop)]" src = {Circlebutton} alt = "Start"></Image>
    </div>
  )
}

export default Start