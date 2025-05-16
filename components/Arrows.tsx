'use client'
import React, {useEffect} from 'react'
import Image from 'next/image';
import arrows from '@/components/images/arrows.png'

const Arrows = () => {
  return (
    <div className="scale-90">
      <Image className = "" src={arrows} alt="D-Pad" useMap="#dpad-map" />
      <map name = "dpad-map">
        <area shape = "circle" coords='0,0,200' alt = "left"></area>
      </map>
      <div ></div>
    </div>
  );
};


export default Arrows