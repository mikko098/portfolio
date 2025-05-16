import React from 'react'
import Image from 'next/image'
import Circlebutton from '@/components/images/circlebutton.png'

const On = () => {
  return (
    <div className='flex flex-col items-center'>
        <Image className = " scale-70 w-[var(--icon-laptop)]" src = {Circlebutton} alt = "On"></Image>
    </div>
  )
}

export default On