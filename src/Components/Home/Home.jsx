import React from 'react'
import Register from '../Register/Register'
import Cards from '../Cards/Cards'

function Home() {
  return (
    <>
    <div className='container#'>
       <div className="image object-cover flex item-center opacity-90 justify-center p-2 center">
        <img className="h-full w-full align-center  flex"src="images/wallpaper.jpg" alt="" />
       </div>
       <Cards />
       <Register />
    </div>
    </>
  )
}

export default Home