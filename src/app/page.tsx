"use client"
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Home() {
  const [inputVal,setInputVal] = useState("")
 const {push} =  useRouter()
  const handleSubmit = (event:FormEvent)=>{
    event.preventDefault();
    push(`/prediction/${inputVal}`)
  }
  return (
     <div className="flex flex-col justify-center h-full mt-40">
      <form className="flex flex-col gap-2 justify-center items-center h-full" onSubmit={handleSubmit} >
        <h1 className="text-lg font-bold">DATA PREDICTOR</h1>
        <input className="text-black px-4 py-2 rounded-md w-1/3" value={inputVal} onChange={(e)=>setInputVal(e.target.value)} type="text" placeholder="Enter your name"/>
        <button className="bg-blue-500 px-4 py-2 rounded-md w-1/3" type="submit">Predict</button>
      </form>
     </div>
  );
}
