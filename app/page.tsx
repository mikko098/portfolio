'use client'
import {useState} from 'react';
import AboutModal from "@/components/AboutModal";
import GameboyBottom from "@/components/GameboyBottom";
import GameboyTop from "@/components/GameboyTop";
import Psyduck from "@/components/Psyduck";

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false);
  
    const handleClick = () => {
      setShowModal(true)
    };

    const handleClose = () => {
      setShowModal(false)
    };
  return (
    <main className = "flex flex-col justify-center mx-auto pt-[4vw] bg-[#292929] h-[100vh]">
        <AboutModal isOpen={showModal} onClose={handleClose} />
        <Psyduck />
      <div className = "flex justify-center pt-[3vh]">
        <GameboyTop handleClick={handleClick}/>
      </div>
      <div className = "flex justify-center pt-[1.2vh]">
        <GameboyBottom />
      </div>
    </main>
  )
}
