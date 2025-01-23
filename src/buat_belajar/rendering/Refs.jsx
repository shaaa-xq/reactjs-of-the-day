// import { useState } from "react";
import { useRef } from "react";

export default function InputRef(){
  const inputRef = useRef(null)

  function handleClick(){
    alert(`Input Value: ${inputRef.current.value}`)
  }

  return(
    <div>
      <input className="bg-white border h-3 border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" ref={inputRef}/>
      <button className="border shadow-s rounded-md p-1 m-2" onClick={handleClick}>Submit</button>
    </div>
  )
}