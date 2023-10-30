import React, { useState } from 'react'
import './login.css'
import loginBg from '../assest/login__bg.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Loader from '../Component/Loader';


function Register() {
const[loader,setLoader]=useState(false);
const navigate=useNavigate();


 async function submitHandler (e) {
  e.preventDefault();
  const displayName=e.target[0].value;
  const email=e.target[1].value;
  const password=e.target[2].value;

  setLoader(true)
  try{
        if(email && password){
        await  createUserWithEmailAndPassword(auth, email, password);
          navigate('/');
        }



  }catch(error){
      console.log("error in registeration form", error)
  }
    
  setLoader(false)
  } 



  return (
    <div className='loginScreen' style={{backgroundImage:`url(${loginBg})`}}>
        <div className='loginScreen__background'>
            <img className='loginScreen__logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />

       <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-800 bg-opacity-70 p-8 rounded shadow-md w-96">
        <h2 className="text-2xl text-white mb-4">Sign Up</h2>
        <form onSubmit={submitHandler}>
        <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 rounded mb-4 bg-gray-700 text-white"
            required
          />  
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded mb-4 bg-gray-700 text-white"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded mb-4 bg-gray-700 text-white"
            required
          />

          {
            loader? ( <button
              type="submit"
              className="flex justify-center w-full bg-red-600 text-white p-2 rounded hover:bg-red-700 "
            >
              <Loader/>
            </button>):( <button
            type="submit"
            className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700"
          >
            Sign Up
          </button>)
          }
         
          <p className='text-white text-center mt-2'>Already Registered ? <Link to='/' className='text-red-700'>Login</Link></p>

        </form>
      </div>
    </div>
      
       </div>
       <div className='loginScreen__gradient'/>

    </div>
  )
}

export default Register