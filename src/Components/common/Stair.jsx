import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export const Stair = () => {
     const stairParent= useRef(null);

  useGSAP(()=>{
    const tl= gsap.timeline({
    
    })
    tl.to(stairParent.current,{
      display:'block',
    })

    tl.from ('.stair',{
      height:0,
      // duration:1,
      stagger:{
        // each:-0.3,
        amount:-0.25,
        // from:"start",
        
      },
    })
    tl.to('.stair',{
      y:'100%',
      stagger:{
        // each:-0.3,
        amount:-0.25,
      }
    })
    tl.to(stairParent.current,{
      display:'none',
    })
    tl.to('.stair',{
      y:0,

    })

  })
  return (
    <div ref={stairParent} className="h-screen w-full fixed z-10">
  <div className="h-full w-full flex">
    <div className="stair h-full w-1/5 bg-black"></div>
    <div className="stair h-full w-1/5 bg-black"></div>
    <div className="stair h-full w-1/5 bg-black"></div>
    <div className="stair h-full w-1/5 bg-black"></div>
    <div className="stair h-full w-1/5 bg-black"></div>
  </div>
</div>
  )
}
