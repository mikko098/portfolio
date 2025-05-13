import GameboyBottom from "@/components/GameboyBottom";
import GameboyTop from "@/components/GameboyTop";
import Psyduck from "@/components/Psyduck";

export default function Home() {
  return (
    <main className = "flex flex-col justify-center mx-auto pt-[4vw] bg-white">
        <Psyduck />
      <div className = "flex justify-center pt-[5.34vh]">
        <GameboyTop />
      </div>
      <div className = "flex justify-center pt-[1.2vh]">
        <GameboyBottom />
      </div>
    </main>
  )
}
