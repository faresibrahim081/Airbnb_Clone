import React from 'react'
import ExploreCard from './ExploreCard'
import { getExplore } from '@/app/utils/api'
import { ExploreData } from '@/types/app';

async function Explore() {
  const exploreData:ExploreData = await getExplore();
  return (
    <section className="pt-6 w-5/6 mx-auto mb-[20px]">
    <h2 className="font-semibold text-4xl mb-5">Explore Nearby</h2>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 '>
    {
      exploreData.map((item,index) => (
          <ExploreCard key={index} img={item.img} location={item.location} distance={item.distance} />
        ))
      }
    </div>
  </section>
  )
}

export default Explore
