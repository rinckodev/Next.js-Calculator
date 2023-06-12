import { MouseEvent } from "react";

interface ButtonProps {
  label?: string,
  id?: string,
  className?: string,
  onClick?: (event: MouseEvent<HTMLButtonElement>) => any
  type?: "number" | "operator"
}

export function CalculatorButton({ label="", id="", className="", onClick, type="number" }: ButtonProps){

  const style = (type == "number")
  ? "bg-neutral-950/70 text-blue-600 rounded-md p-4 active:bg-neutral-100/20 border-neutral-800/80"
  : "bg-blue-600/70 text-white rounded-md p-4 active:bg-blue-400/90 border-neutral-200/30";

  return (
    <button 
      id={id} onClick={onClick} 
      className={`transition-all duration-500 text-xl ${style} ${className}
      hover:drop-shadow-[0_0_40px_rgba(85,160,255,0.6)] group/button
      active:scale-90 border 
      `}
    ><p className="transition-all duration-500 group-hover:text-white">{label}</p></button>
  )
}