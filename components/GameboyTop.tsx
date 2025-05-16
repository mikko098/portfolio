import React from 'react'
import Github from '@/components/Githubicon'
import About from './About'
import Linkedin from './Linkedin'


const GameboyTop = () => {
  return (
    <div className = "bg-[#731819] w-[25vw] h-[16.7vw] p-[2.5vw] rounded-xl shadow-[inset_2px_-2px_5px_7px_rgba(0,0,0,0.3)]">
      <div className = "bg-[#292929] w-[20vw] h-[11.7vw] p-[0.925vw] rounded-md">
        <div className = "flex justify-evenly bg-[#d9d9d9] w-[18.15vw] h-[9.852vw] pt-[5vh] pb-[5vh]">
          <About />
          <Github />
          <Linkedin />
        </div>
      </div>
    </div>
  )
  
}

export default GameboyTop