import React from 'react'
import { Banner } from './Components/Banner/Banner'
import { CraftItemsSec } from './Components/CraftItemsSec'
import { Helmet } from 'react-helmet-async'
import { ExtraSections } from './Components/ExtraSections'


export const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Fiber Fution | Home</title>
      </Helmet>
      <Banner></Banner>
      <CraftItemsSec></CraftItemsSec>
      <ExtraSections></ExtraSections>
    </div>
  )
}
