import React from 'react'
import AButton from './Abutton'
import Bbutton from './Bbutton'
import Arrows from './Arrows'

const GameboyBottom = () => {
  return (
    <div className = "bg-[#731819] flex grid-cols-5 space-x-3 w-[25vw] h-[16.7vw] p-[2.5vw] rounded-xl">
      <div className = "self-center space-y-5">
        <Arrows />
      </div>
      <div className = "self-end">
        <AButton />
      </div>
      <div className = "self-end">
      <Bbutton />
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