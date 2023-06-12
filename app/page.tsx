import { CalculatorBox } from "./components";

export default function Home() {
  return (
    <main className="flex relative flex-col items-center justify-center gap-2 
    bg-gradient-to-br from-neutral-800 from-10% to-neutral-950 to-90% h-screen
    bg-neutral-900"
    >
      <div className="relative flex justify-center items-center h-full

      before:content-[''] before:absolute before:bg-blue-600
      before:translate-x-[-120px] before:translate-y-[-120px]
      before:w-[200px] before:h-[200px] before:rounded-full
      before:bg-gradient-to-br before:from-sky-400 before:to-blue-800

      after:content-[''] after:absolute after:bg-blue-600
      after:translate-x-[120px] after:translate-y-[120px]
      after:w-[160px] after:h-[160px] after:rounded-full
      after:bg-gradient-to-br after:from-blue-800 after:to-blue-600
      "/>
      <CalculatorBox/>
    </main>
  )
}