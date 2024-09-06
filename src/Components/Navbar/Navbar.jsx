import React from 'react'
import { NavLink,Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
        <div className="cover w-full h-4.625  bg-white text-black-50 border-y-neutral-950">
          <div className="nav flex flex-row justify-between items-center px-7 py-3">
            <div className=" transition delay-1000 duration-75 text-2xl delay-150 logo italic font-bold  cursor-pointer hover:underline">
              <Link to = '/'>HustleGym</Link>
            </div>
            <div className="links flex flex-row justify-evenly items-center w-96">
              {/* <NavLink to='/' className={({isActive})=>`${isActive ? "text-orange-700":"text-black-700"}`}>Home</NavLink>
              <NavLink to='/about' className={({isActive})=>`${isActive?"text-orange-700 ":"text-black"}`}>About</NavLink>
              <NavLink to='/contact' className={({isActive})=>`${isActive ? "text-orange-700":"text-black"}`}>contact</NavLink>
              <NavLink to='/services'className={({isActive})=>`${isActive?"text-orange-700":"text-black"}`}>services</NavLink> */}
              {[{name:"Home",route:"/"},{name:"About",route:"/about"},{name:"Contact",route:"/contact"},{name:"Services",route:"/services"}]
              .map((elem , idx)=><NavLink to={elem.route} className={({isActive})=>`${isActive ?'text-orange-700':'text-black-700'}`} key={idx} >{elem.name}</NavLink>)}

            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar