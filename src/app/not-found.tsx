"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
const notFound = () => {
  const {push} = useRouter()
  return (
    <div>
       <button className='bg-blue-700 px-3 py-2 rounded-md'  onClick={()=>push("/")}>to home</button>
    </div>
  )
}

export default notFound
