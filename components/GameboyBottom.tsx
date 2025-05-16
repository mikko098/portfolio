import React from 'react'
import AButton from './Abutton'
import Bbutton from './Bbutton'
import Arrows from './Arrows'
import Select from './Select'
import Start from './Start'
import On from './On'

const GameboyBottom = () => {
  return (
    <div className = "bg-[#731819] flex flex-col justify-end rounded-xl w-[25vw] h-[32.7vh] shadow-[inset_0px_-2px_5px_7px_rgba(0,0,0,0.3)]">
       <div className='w-[25vw]'> <On/> </div>
      <div className='flex grid-cols-5 space-x-[1vw] p-[1.5vw] h-[25vh]'>
      <div className = "self-center ">
        <Arrows />
      </div>
      <div className = "self-end">
        <Select />
      </div>
      <div className = "self-end">
        <Start />
      </div>
      <div className = "self-center">
        <AButton />
      </div>
      <div className = "self-center mt-[-6vh]">
      <Bbutton />
      </div>
      </div>
    </div>
  )
}

export default GameboyBottom