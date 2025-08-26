import { useState } from "react";
const Body=()=>{

    const [weight,setweight]=useState('');
    const [height,setheight]=useState('');
    const [bmi,setbmi]=useState("");
    const [message,setmessage]=useState("");
    const calcsubmit=(e)=>{
        e.preventDefault();
        if(weight==0||height==0){
            alert("PLease Enter Valid NUmbers ");
        }
     
     let bmi =Number(weight) / (Number(height) * Number(height)) * 703;
     setbmi(bmi.toFixed(1))
        if (bmi < 18.5) {
    setmessage("Underweight ⚠️");
} else if (bmi >= 18.5 && bmi < 25) {
    setmessage("Normal weight ✅");
} else if (bmi >= 25 && bmi < 30) {
    setmessage("Overweight ⚠️");
} else {
    setmessage("Obese ⚠️");
}
    }
    return (
        <div className="bg-gray-900 w-screen h-screen flex items-center justify-center flex-col gap-10 ">
             <h1 className="text-6xl font-extrabold  bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">BMI CALCULATOR</h1>
            <div className="flex  w-1/4 h-3/4 bg-gray-200 rounded shadow-xl shadow-blue-600">
      <form className="items-center  flex flex-col" onSubmit={calcsubmit}>
        <div className="py-6 px-8">
            <label className="text-2xl font-bold">Weight (lbs)</label>
            <br />
            <input type="text" value={weight} onChange={(e)=>setweight(e.target.value)} className="border-1 mt-3 text-xl rounded py-1 px-2 w-xs" placeholder="Enter Your Weight..." />
        </div>
        <div className="py-4 px-5">
            <label className="text-2xl font-bold">Height (inc)</label>
            <br />
            <input type="text" value={height} onChange={(e)=>setheight(e.target.value)}className="border-1 mt-3 text-xl rounded py-1 px-2 w-xs" placeholder="Enter Your Height..." />
        </div>
        <div className="flex items-center  justify-center mt-3 flex-col gap-4 font-bold ">
            <button type="submit"  className="bg-blue-400 px-10 text-white cursor-pointer text-xl rounded w-60 py-2">Submit</button>
            <button onClick={()=>window.location.reload()} className="bg-gray-400 cursor-pointer  text-white text-xl rounded w-60 py-2">Reload</button>
        </div>
         <h2 className=" mt-4 text-2xl font-bold  text-blue-900">Your BMI :-{bmi}</h2>
            <p>{message}</p>
      </form>
 
            </div>

        </div>
    )
}
export default Body