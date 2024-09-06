import React from 'react'
import { Link } from 'react-router-dom'
function Cards() {
  return (
    <div className="wrapper-card h-auto p-4 m-2  ">
        <div className="parent-card flex items-center justify-evenly  h-96 p-4 " >

          {['images/functionalTrainingCard.jpg','images/flexibilityCard.jpg','images/strengthTrainingCard.jpg']
          .map((elem , idx)=> <div className="card h-auto m-2 w-2/6 p-2 ">
          <Link to = "/">
          <img className="hover:opacity-90 hover:bg-black-200 rounded-lg hover:shadow-md hover:scale-105" key={idx}src={elem} alt="" />
          </Link></div>)}
           {/* <div className="card relative -bottom-0 h-auto m-2 w-2/6 p-2  ">
           <Link to='/'>
           <img className="hover:opacity-90 hover:bg-black-200"src="images/functionalTrainingCard.jpg" alt="" />
           <div className="absolute h-1/2 w-auto bg-black-800"></div>
           </Link>
           </div>
           <div className="card h-auto m-2 w-2/6 p-2 border-2 border-sky-900">
           <Link to = "/">
           <img src="images/flexibilityCard.jpg" alt="" />
           </Link></div>
           <div className="card h-auto m-2 w-2/6 border-2 p-2 border-sky-900">
           <Link to="/">
           <img src="images/strengthTrainingCard.jpg" alt="" />
           </Link></div> */}

        </div>
    </div>
  )
}

export default Cards