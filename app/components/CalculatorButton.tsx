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
  ? "bg-neutral-950/50 text-blue-600 rounded-md p-2"
  : "bg-blue-600 text-white rounded-md p-2"

  return (
    <button 
      id={id} onClick={onClick} 
      className={`transition duration-300 active:translate-x-1 text-xl ${style} ${className}`}
    >{label}</button>
  )
}
// export function OperatorButton({ label="", id="", className="", onClick }: ButtonProps){

//   return (
//     <button id={id} onClick={onClick} className={`${className}
//     transition duration-300 active:translate-x-1 text-xl
//     bg-blue-600 text-white rounded-md p-2
//     `}
//     >{label}</button>
//   )
// }