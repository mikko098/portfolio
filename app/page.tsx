import GameboyBottom from "@/components/GameboyBottom";
import GameboyTop from "@/components/GameboyTop";
import Psyduck from "@/components/Psyduck";

export default function Home() {
  return (
    <main className = "flex flex-col justify-center mx-auto pt-[5vw]">
      <div className = "flex bg-white">
        <Psyduck />
      </div>
      <div className = "flex justify-center pt-[2.57vw]">
        <GameboyTop />
      </div>
      <div className = "flex justify-center pt-[0.5vw]">
        <GameboyBottom />
      </div>
    </main>
  )
}
