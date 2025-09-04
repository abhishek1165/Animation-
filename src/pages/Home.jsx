import React from 'react'
import Video from '../Components/home/Video'
import HomeHeroText from '../Components/home/HomeHeroText'
import HomeButtomText from '../Components/home/HomeButtomText'

const Home = () => {
  return (
    <div >
    <div className=' h-screen w-screen fixed '>
      <Video />
    </div>
    <div className=' h-screen w-screen relative flex pb-5 overflow-hidden flex-col justify-between '>
      <HomeHeroText/>
      <HomeButtomText/>
    </div>
    
    </div>
  )
}

export default Home