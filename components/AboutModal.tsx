import React from 'react'

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className='absolute inset-0 flex justify-center items-center'>
      <div className = " w-[20vw] h-[20vh] flex flex-col bg-[#d9d9d9] rounded-xl" >
        <div className='flex justify-between bg-[#292929] rounded-t-xl' >
          <p className= 'ml-[0.5vw] font-(family-name:--font-pixelify) text-[#d9d9d9]'> about me </p>
          <button onClick = {onClose} className='place-self-end font-(family-name:--font-pixelify) mr-[0.5vw] text-[#d9d9d9]'>{"{ x }"}</button>
        </div>
        <div className = 'flex flex-col items-center'>
          <p className='font-(family-name:--font-pixelify) text-[#292929] place-self-center ml-[1vw] mr-[1vw] mt-[1vh]'> hello, i'm mishal. i'm a second year, third sem cs student with a specialisation in data science. </p>
          <a className= "font-(family-name:--font-pixelify) text-[#731819] ml-[1vw] mr-[1vw]" href = "https://github.com/mikko098/resume/blob/main/Mishal_Mann_Nair_CV.pdf" target='_blank'> click here to see my cv </a>
        </div>
      </div>
    </div>
  )
}

export default AboutModal