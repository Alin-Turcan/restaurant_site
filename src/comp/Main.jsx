import React from 'react'

export default function Main() {
  return (
    <div >
      <div className='image-div w-full h-[2700px] object-fit-contain flex items-center justify-center'>
      <div className='text-white text-[90px] armenian-img'>
      <h1>Armenian cuisine corner with delivery in Chisinau</h1>
      </div>
      <div className='text-white meat-city'>
       <h3>Probably,the best meat in the city</h3>
      </div>
      <div className='text-[white] dishes-btn'>
      <button className='btn-dish'>CHOOSE DISHES</button>
      </div>
      <div className='container'>
          <div className='breakfast-img '></div>
          <div className='aperitiv-png'></div>
          <div className='caucas-img'></div>
          <div className='cold-dish'></div>
          <div className='first-courses'></div>
          <div className='salad'></div>
          <div className='pasta'></div>
          <div className='main-dish'></div>
          <div className='garnish'></div>
          <div className='fish'></div>
          <div className='grilled-dish'></div>
          <div className='desserts'></div>
      </div>
      </div>
      <h1 className='text-6xl ml-[660px] mt-[80px] breakfast'>Breakfast</h1>
    </div>
  )
}
