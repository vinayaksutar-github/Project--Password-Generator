import './App.css'
import React,{useState,useCallback, useEffect,useRef} from 'react';
function  App() {
  const[length,setLength]=useState(5)
  const[num,setNum]=useState(false)
  const[char,setChar]=useState(false)
  const[pass,setPass]=useState("")
  const passwordRef=useRef("")
  const passwordGen=useCallback(()=>{
    let password= ""
    let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (num){
      string+="0123456789"
    }
    if (char){
      string+="!@#$%^&*-_+=[]{}~`"
    }
    for(let i=0;i<length;i++){
      let gen=Math.floor(Math.random()*string.length+1)
      password+=string.charAt(gen)
    }
    setPass(password)
  },[num,char,setPass,length])
  const copyText=useCallback(()=>{
     passwordRef.current?.select()
      // select if not empty
      passwordRef.current?.setSelectionrange(0,3)
      window.navigator.clipboard.writeText(pass)
  },[pass]
  )
  useEffect(()=>{
    passwordGen()
  },[length,num,char,setPass,passwordGen])
  return ( 
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-yellow-500'>
    <h1 className='text-3xl text-center text-white'>PASSWORD</h1>
    <div className='flex shadow rounded-lg overflow-hidden'>
    <input 
      type="text"
      value={pass}
      className='outline-none w-full py-1 px-3' 
      placeholder='PASSWORD'
      readOnly
      ref={passwordRef}
      />
      <button onClick={copyText}className='outline-none bg-green-500 text-white px-2 py-1 shrink-0'>
        COPY
      </button>
    </div>
   
    <div className='flex text-sm gap-x-2'>
      <div className='flex item-center gap-x-1'>
        <input type="range"
        min={5}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>setLength(e.target.value)}
        />
          <label>Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
      <input type="checkbox"
        defaultChecked={num}
        id='numberinput'
        onClick={()=>{
          setNum((prev)=>!prev)
        }}
        />
        <label htmlFor="numberInput">Number</label>
      </div>
      <div className='flex items-center gap-x-1'>
      <input type="checkbox"
        defaultChecked={char}
        id='characterinput'
        onClick={()=>{
          setChar((prev)=>!prev)
        }}
        />
        <label htmlFor="CharacterInout">Charaters</label>
      </div>
    </div>
    </div>
    </>
   );
}

export default App;