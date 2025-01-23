import { useRef } from 'react';

export default function ChangeBackground(){
  const themeRef = useRef(null)

  function change(){
    themeRef.current.style.backgroundColor = "violet"
  }

  return(
    <div ref={themeRef}>
      <h1>Switch Background Color Using Ref</h1>
      <button className='border shadow-s rounded-md p-1 m-2' onClick={change}>Switch Theme</button>
    </div>
  )
}