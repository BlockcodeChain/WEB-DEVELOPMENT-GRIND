import { useEffect, useState } from "react"

const Background=()=>{
  const[color,setcolor]=useState(" ");
  const[bg,setbg]=useState("gray");
 useEffect(()=>{
  if(color.trim()!=" "){
    setbg(color)
  }

 },[color])
  return (
    <div className="w-screen h-screen flex items-center justify-center"
    style={{backgroundColor:bg}}
    >
      
  <input type="text" placeholder="ENTER COLOR NAME " value={color} onChange={(e)=>setcolor(e.target.value)}className="border-2 rounded px-2 py-2  text-3xl text-white bg-gray-300 text-center" />
  {/* <button>chnage color</button> */}
  {/* button lagyrgge toh useeffect nhi lagyegge  */}
    </div>
  )
}
export default Background