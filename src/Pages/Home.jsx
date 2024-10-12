import React from 'react'
import Hero from '../components/Hero'
import { Slider } from '../Slider'
import slides from '../mock.json'

export default function Home() {
  return (
    
   <>
    <Hero />
    <Slider slides={slides} />
   </>
    
  )
}
