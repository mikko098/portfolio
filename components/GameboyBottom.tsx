import React from 'react'
import AButton from './Abutton'
import Bbutton from './Bbutton'
import Arrows from './Arrows'
import Select from './Select'
import Start from './Start'

const GameboyBottom = () => {
  return (
    <div className = "bg-[#731819] flex grid-cols-5 space-x-[1vw] w-[25vw] h-[16.7vw] p-[2.5vw] rounded-xl shadow-[inset_0px_-2px_5px_7px_rgba(0,0,0,0.3)]">
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
  )
}

export default GameboyBottom