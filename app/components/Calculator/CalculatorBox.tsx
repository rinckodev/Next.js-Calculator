"use client"
import { MouseEvent, useEffect, useState } from "react";
import { CalculatorButton } from "./CalculatorButton";

export function CalculatorBox(){
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isNaN(parseInt(e.key))) {
        setResult(result.concat(String(parseInt(e.key))))
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [result])
  return (
    <div className="absolute w-80 p-4 rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.8)]
      bg-neutral-950/60 z-10
      border-[0.1px] border-neutral-600/40 flex flex-col gap-2
      backdrop-filter backdrop-blur-xl
      ">
        <div className="flex flex-row justify-center">
          <h1 className="text-2xl text-white uppercase">Calculator</h1>
        </div>
        
        <input type="text" value={result} disabled className="
          w-full text-right py-4 px-5 text-2xl bg-neutral-900/20 text-white rounded-md
          border border-neutral-600
        "/>

        <div className="buttons grid grid-cols-4 gap-2 mt-4">

          <CalculatorButton type="operator" label="AC" onClick={clear}/>
          <CalculatorButton type="operator" label="DE" onClick={deleteEl}/>
          <CalculatorButton id="%" type="operator" label="%" onClick={handleClick}/>
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
          
          <CalculatorButton id="." type="number" label="." onClick={handleClick}/>
          <CalculatorButton id="0" type="number" label="0" onClick={handleClick}/>
          
          <CalculatorButton id="=" type="operator" label="=" onClick={calculate}/>
        </div>
    </div>
  )
}