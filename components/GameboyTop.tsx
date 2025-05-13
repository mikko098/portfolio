import React from 'react'
import Github from '@/components/Githubicon'
import About from './About'
import Linkedin from './Linkedin'

const GameboyTop = () => {
  return (
    <div className = "bg-[#731819] w-[25vw] h-[16.7vw] p-[2.5vw] rounded-xl shadow-[inset_2px_-2px_5px_7px_rgba(0,0,0,0.3)]">
      <div className = "bg-[#292929] w-[20vw] h-[11.7vw] p-[0.925vw] rounded-md">
        <div className = "grid cols-cols-3 justify-evenly bg-[#d9d9d9] w-[18.15vw] h-[9.852vw] pt-[2vw]">
          <a className = "col-start-1" href="https://github.com/mikko098" target = "_blank"> <About /> </a>
          <a className = "col-start-2" href="https://github.com/mikko098" target = "_blank"> <Github /> </a>
          <a className = "col-start-3" href="https://github.com/mikko098"> <Linkedin/> </a>
          <p className= "font-(family-name:--font-pixelify) text-[#292929]"> about</p>
          <p className= "font-(family-name:--font-pixelify) text-[#292929]"> github </p>
          <p className= "font-(family-name:--font-pixelify) text-[#292929]"> linkedin </p>
        </div>

      </div>
    </div>
  )
  
}

export default GameboyTop