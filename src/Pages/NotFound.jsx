import React from 'react'
import Header from '../components/Header'
import bgNotFound from "../assets/bgNotFound.jpg"
export default function NotFound() {
  return (
    <>
      <Header> </Header>
      <div className="w-full relative overflow-hidden " style={{ height: 'calc(100vh - 4rem)' }}>
        <img
          src={bgNotFound}
          alt="Explore"
          className="w-full h-full object-cover absolute object-center brightness-[.30] shadow-lg animate-zoom"
        />

        <div className="relative isolate px-6 pt-14 lg:px-8 ">

        <div className="text-center">
          <p className="text-8xl font-bold text-white ">4 0 4</p>
        <p className="text-4xl font-bold mb-1 text-white" >YES, YOU ARE LOST</p>
        <p className="text-2xl font-bold text-white">That road didnt took you</p>
        <p className="text-2xl font-bold text-white">anywhere.</p>
            
          </div>
        </div>



      </div>

    </>
  )
}
