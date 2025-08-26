import { useState } from "react"



function Hook() {
const [change,setchange]=useState(0)
const Increment=()=>{
  setchange(change+1)
}
const reset=()=>{
  setchange(0)
}
const Decrement=()=>{
  setchange(change-1)
}
  return (
    <div>
     <h1>{change}</h1>
     <button onClick={Increment}>Increment</button>
     <button onClick={reset}>Reset</button>
     <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default Hook
