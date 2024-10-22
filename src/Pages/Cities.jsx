import React from 'react'
import Search from '../components/Search'
import Cards from '../components/Cards'

export default function Cities() {
  return (
    <div className="container w-full min-h-[80vh] mx-auto py-10">      
      <h1 className="text-4xl font-bold mb-4">Cities</h1>
      <Search />
      <Cards />
      <Cards />
      <Cards />                                                                                                                                                                                                                                                                                                                             
    </div>
  )
}
