import React from 'react'

const Video = ({ rounded = false }) => {
  return (
    <div className=' h-full  w-full  '>
    <video className={`h-full w-full object-cover ${rounded ? 'rounded-full' : ''}`} autoPlay loop muted src="/video/sample.mp4"></video>
    </div>
  )
}

export default Video