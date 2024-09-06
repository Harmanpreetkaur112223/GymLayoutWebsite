// import React from 'react'
// import { Link } from 'react-router-dom'
// function Register() {
//   return (
//     <>
//     <div className="register-container w-screen h-full m-2  bg-gray-400">
//         <div className="register-parent flex items-center justify-evenly">
//         <div className="register-left-image h-full w-2/5  p-16 flex items-center justify-center">
//         <img src="/images/Register.jpg" className='h-full w-full m-6 rounded-3xl hover:scale-110 cursor-pointer'  />
//         </div>
//         <div className="register-right-form h-full w-1/2 px-8 py-4  font-semibold  text-center">
//            <div className="card p-8 py-18 rounded-3xl h-full w-2/3 backdrop-blur-xl bg-black/20">
//             <h2 className='text-orange-700  transition delay-1000 duration-75 font-bold text-3xl mb-4 cursor-pointer :hover underline  '><Link to='/contact'> REGISTER</Link> </h2>
//             <hr bg-orange-700 />
//             <form action="post">
//                 {[{label:"Username",for:"username"},{label:"Email",for:"email"},{label:"Password",for:"password"},{label:"Contact",for:"contact"},{label:"Fullname",for:"fullname"}]
//                 .map((elem , index)=><div className='flex items-center gap-5 m-2 mt-6'>
//                 <label htmlFor={elem.for} className='font-semibold'>{elem.label}:</label>
//                 <input type="text"  className="outline-none w-3/5 bg-transparent text-sm p-2 rounded-md border-2 text-white hover:outline-none"name='username' placeholder={`Enter your ${elem.for}`} id={elem.for} autoComplete='off' required/>
//             </div>)}
//                 {/* <div className='flex items-center gap-5 m-2 mt-6'>
//                     <label htmlFor="username" className='font-semibold'>Username:</label>
//                     <input type="text"  className="outline-none bg-transparent text-sm p-2 rounded-md border-2 border-teal-700 text-black"name='username' placeholder='Enter your username ' id='username' autoComplete='off' required/>
//                 </div>
//                 <div className='flex items-center gap-10 m-2'>
//                     <label htmlFor="email" className='font-semibold'>Email:</label>
//                     <input type="email" className='border-2 border-teal-700 text-sm  rounded-md p-2 text-white bg-transparent outline-none' name='email' placeholder='Enter your email ' id='email' autoComplete='off' required/>
//                 </div>
//                 <div className='flex items-center gap-9 m-2'>
//                     <label htmlFor="password" className='font-semibold'>Password:</label>
//                     <input type="password" className='bg-transparent text-white text-sm border-2 p-2 border-teal-700   outline-none rounded-md' name='password' placeholder='Enter your password ' id='password' autoComplete='off' required/>
//                 </div>
//                 <div  className='m-2 flex items-center gap-9'>
//                     <label htmlFor="contact" className='font-semibold'>Contact:</label>
//                     <input className='text-white bg-transparent rounded border-2 text-sm border-teal-700  p-2 outline-none' type="tel" name='contact' placeholder='Enter your contact number ' id='contact' autoComplete='off' required/>
//                 </div>
//                 <div className='m-3 flex items-center gap-10'>
//                     <label htmlFor="fullname" className='font-semibold'>Fullname:</label>
//                     <input className='text-white border-2 border-teal-700  bg-transparent text-sm rounded-md p-2 outline-none' type="text" name='fullname' placeholder='Enter your Fullname ' id='fullname' autoComplete='off' required/>
//                 </div> */}
//                 <button className='bg-green-900 w-1/2 ease-in-out text-white border-md rounded-md p-2 font-semibold px-5 hover:text-green-900 hover:bg-white hover:shadow-md hover:shadow-black'type="submit">Register</button>
//             </form>

//            </div>
//         </div> 

//         </div>
//     </div>
//     </>
//   )
// }

// export default Register
// // // import mongoose from "mongoose"
// // import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
// // import bcrypt from "bcrypt"
// // import jwt from "jsonwebtoken";
// // const userSchema = new mongoose.Schema({
// //     username:{
// //         type:String,
// //         unique:true,
// //         required:true,
// //         lowercase:true,
// //         index:true,
// //         trim:true
// //     },
// //     email:{
// //         type:String,
// //         unique:true,
// //         required:true,
// //         lowercase:true,
// //         trim:true
// //     },
// //     password:{
// //         type:String,
// //         unique:true,
// //         required:true,
// //         trim:true
// //     },
// //     contact:{
// //         type:String,
// //         unique:true,
// //         required:true,
// //         lowercase:true,
// //         trim:true
// //     },
// //     fullname:{
// //         type:String,
// //         required:true,
// //         lowercase:true,
// //         trim:true
// //     },
// //     refreshToken:{
// //         type:String
// //     },
// //     isAdmin:{
// //         type:Boolean,
// //         default:false
// //     }
// // })

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Register() {
  const labelArray = [
    { label: "Fullname", for: "fullname", value: "" }, 
    { label: "Username", for: "username", value: "" },
    { label: "Email", for: "email", value: "" },
    { label: "Password", for: "password", value: "" },
    { label: "Contact", for: "contact", value: "" },
  ]
  const [data, setData] = useState(
    labelArray.reduce((acc, field) => ({ ...acc, [field.label]: field.value }), {})
  )

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log({...data}.le)
    setData({ ...data, [name]: value })
    // console.log(data)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
    setData(labelArray.reduce((acc, field) => ({ ...acc, [field.label]: field.value }), {}))

  }
  return (
    <>
      <div className="register-container w-screen h-full m-2  bg-gray-400">
        <div className="register-parent flex items-center justify-evenly">
          <div className="register-left-image h-full w-2/5  p-16 flex items-center justify-center">
            <img src="/images/Register.jpg" className='h-full w-full m-6 rounded-3xl hover:scale-110 cursor-pointer' />
          </div>
          <div className="register-right-form h-full w-1/2 px-8 py-4  font-semibold  text-center">
            <div className="card p-8 py-18 rounded-3xl h-full w-2/3 backdrop-blur-xl bg-black/20">
              <h2 className='text-orange-700  transition delay-1000 duration-75 font-bold text-3xl mb-4 cursor-pointer :hover underline  '><Link to='/contact'> REGISTER</Link> </h2>
              <hr bg-orange-700 />
              <form action="post" onSubmit={handleSubmit}>
                {labelArray
                  .map((elem, index) =>


                    <div key={index} className='flex items-center gap-5 m-2 mt-6'>
                      <label
                        htmlFor={elem.for}

                        className='font-semibold'>
                        {elem.label}:
                      </label>

                      <input

                        type="text"
                        className="outline-none w-3/5 bg-transparent text-sm p-2 rounded-md border-2 text-white hover:outline-none"
                        name={elem.label}
                        placeholder={`Enter your ${elem.for}`}
                        id={elem.for}
                        autoComplete='off'
                        required
                        value={data[elem.label]}
                        onChange={handleChange}
                      />
                    </div>)}
                <button className='bg-green-900 w-1/2 ease-in-out text-white border-md rounded-md p-2 font-semibold px-5 hover:text-green-900 hover:bg-white hover:shadow-md hover:shadow-black' type="submit">Register</button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Register;