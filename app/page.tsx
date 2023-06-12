"use client"

import { MouseEvent, useState } from "react";
import { CalculatorButton } from "./components/CalculatorButton";

export default function Home() {
  
  const [ result, setResult ] = useState("");

  function handleClick(event: MouseEvent<HTMLButtonElement>){
    setResult(result.concat(event.currentTarget.id))
  }
  function clear(){
    setResult("");
  }
  function deleteEl(){
    setResult(result.slice(0, -1));
  }

  function calculate(){
    try {
      setResult(eval(result).toString())
    } catch (err){
      setResult("Error!")
    }
  }
  // before:content-[''] before:absolute before:top-0 before:left-[50px]
  //     before:h-[80px] before:w-[50px] before:rounded-t-[50px] 
  //     before:rounded-r-[50px]before:rounded-b-0 before:rounded-l-0 
  //     before:bg-black before:-rotate-45 before:origin-[0_100%]

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2 bg-neutral-900">
      <div className="calculator bg-neutral-900 w-80 mx-auto mt-10 p-4 rounded-lg shadow-lg relative z-10

      before:content-[''] before:absolute before:top-0 before:left-[50px]
      before:[h-50px] before:w-[50px]

      
      ">
        
        
        <input type="text" value={result} disabled className="
          w-full text-right py-4 px-5 text-2xl bg-neutral-900/80 text-white rounded-md
        "/>

        <div className="buttons grid grid-cols-4 gap-4 mt-4">

          <CalculatorButton type="operator" label="AC" onClick={clear}/>
          <CalculatorButton type="operator" label="DE" onClick={deleteEl}/>
          <CalculatorButton id="." type="operator" label="." onClick={handleClick}/>
          <CalculatorButton id="/" type="operator" label="/" onClick={handleClick}/>

          <CalculatorButton id="7" type="number" label="7" onClick={handleClick}/>
          <CalculatorButton id="8" type="number" label="8" onClick={handleClick}/>
          <CalculatorButton id="9" type="number" label="9" onClick={handleClick}/>
          
          <CalculatorButton id="*" type="operator" label="*" onClick={handleClick}/>
          
          <CalculatorButton id="4" type="number" label="4" onClick={handleClick}/>
          <CalculatorButton id="5" type="number" label="5" onClick={handleClick}/>
          <CalculatorButton id="6" type="number" label="6" onClick={handleClick}/>
          
          <CalculatorButton id="-" type="operator" label="-" onClick={handleClick}/>
        
          <CalculatorButton id="1" type="number" label="1" onClick={handleClick}/>
          <CalculatorButton id="2" type="number" label="2" onClick={handleClick}/>
          <CalculatorButton id="3" type="number" label="3" onClick={handleClick}/>
          
          <CalculatorButton id="+" type="operator" label="+" className="row-span-2" onClick={handleClick}/>
          
          <CalculatorButton id="00" type="number" label="00" onClick={handleClick}/>
          <CalculatorButton id="0" type="number" label="0" onClick={handleClick}/>
          
          <CalculatorButton id="=" type="operator" label="=" onClick={calculate}/>
        </div>
      </div>
    </main>
  )
}