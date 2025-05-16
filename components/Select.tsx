import React from 'react'
import Image from 'next/image'
import Circlebutton from '@/components/images/circlebutton.png'

const Select = () => {
  return (
    <div className='flex flex-col items-center'>
        <p className= "scale-70 font-(family-name:--font-pixelify) text-[#999999]">SELECT</p>
        <Image className = " scale-70 w-[var(--icon-laptop)]" src = {Circlebutton} alt = "Select"></Image>
    </div>
  )
}

export default Select