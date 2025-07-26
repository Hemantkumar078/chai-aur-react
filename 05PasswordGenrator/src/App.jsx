import {useRef,useState,useCallback,useEffect} from 'react'
export default function App() {
  const [length,setLength]=useState(15);
  const [numAllow,setNumAllow]=useState(false);
  const [charAllow,setCharAllow]=useState(false);
  const [password,setPassword]=useState("");
  const passwordRef=useRef(null);
  const passwordGenrator=useCallback(()=>{
    let pass="";
    let charSet="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numAllow){
      charSet+="0123456789";
    }
    if(charAllow){
      charSet+="!@#$%^&*()_+[]{}|;:,.<>?";
    }
    for(let i=0;i<length;i++){
      pass+=charSet[Math.floor(Math.random()*charSet.length)];
    }
    setPassword(pass);
  },[length,numAllow,charAllow,setPassword]);
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])
  useEffect(()=>{
    passwordGenrator();
  },[length,numAllow,charAllow,passwordGenrator]);
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password Genrator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input  ref={passwordRef} className="outline-none bg-white w-full py-1 px-3" type="text" value={password}placeholder={password} required></input>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
          <input className='cursor-pointer' type='range' min={6} max={100} value={length} onChange={(e)=>setLength(e.target.value)} required></input>
          <label>Length: {length}</label></div>
        <div className="flex items-center gap-x-1">
          <input type='checkbox' defaultChecked={charAllow} onChange={()=>setCharAllow(!charAllow)}></input>
          <lable>Characters</lable></div>
        <div className="flex items-center gap-x-1">
          <input type='checkbox' defaultChecked={numAllow} onChange={()=>setNumAllow(!numAllow)}></input>
          <lable>Numbers</lable>
        </div>
        </div>
    </div>
  )
}