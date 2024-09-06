import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
    <div className='main h-3.125 bg-gray-900 text-white flex flex-row i justify-around py-11'>
        <div className='dodge  '>
            <div className='text-white-950 mb-4 font-extrabold cursor-pointer'>Dodge</div>
            <div className='block font-thin leading-8 text-base'>
                <Link to='/' className='block hover:underline hover:text-orange-500 active:orange-400'>Teardown</Link>
                <Link to='/' className='block hover:underline hover:text-orange-500 active:orange-400'>News</Link>
                <Link to='/' className='block hover:underline hover:text-orange-500 active:orange-400'>Params</Link>
                <Link to='/' className='block hover:underline hover:text-orange-500 active:orange-400'>About us</Link>
                <Link to='/' className='block hover:underline hover:text-orange-500 active:orange-400'>contact us</Link>
                
            </div>
        </div>
        <div className='social '>
            <div className='font-extrabold mb-4 cursor-pointer'>Social</div>
            <div className='block font-light text-base leading-8 '>
                <Link className='block hover:underline hover:text-orange-500 active:orange-400' to='/'>Facebook</Link>
                <Link className='block hover:underline hover:text-orange-500 active:orange-400' to='/'>Twitter</Link>
                <Link className='block hover:underline hover:text-orange-500 active:orange-400' to='/'>Youtube</Link>

            </div>
        </div>
        <div className='service '>
            <div className='font-extrabold mb-4 cursor-pointer'>Service</div>
            <div className='block font-light text-base leading-8'>
                <Link className='block hover:underline hover:text-orange-500 active:orange-400' to='/'>Compare</Link>
                <Link className='block hover:underline hover:text-orange-500 active:orange-400' to='/'>Download</Link>
                <Link className='block hover:underline hover:text-orange-500 active:orange-400' to='/'>Feedback</Link>
                <Link className='block hover:underline hover:text-orange-500 active:orange-400' to='/'>Bug Report</Link>

            </div>
        </div>
        <div className='activity'>
            <div className='font-extrabold mb-4 cursor-pointer' >Activity</div>
            <div className='font-light text-base leading-8'>
            <Link  className='block hover:underline hover:text-orange-500 active:orange-400' to='/'>Influencers</Link>
            <Link className='block hover:underline hover:text-orange-500 active:orange-400' to='/'>Affiliate</Link>
            <Link  className='block hover:underline hover:text-orange-500 active:orange-400'to='/'>Co branding</Link>
            <Link className='block hover:underline hover:text-orange-500 active:orange-400' to='/'>Giveaway</Link>

            </div>
        </div>
    </div>
    </>
  )
}

export default Footer