import React, { useState } from 'react'
import './login.css'
import loginBg from '../assest/login__bg.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import Loader from '../Component/Loader'
function Login() {
  const navigate=useNavigate();
  const[loader,setLoader]=useState(false);

  async function submitHandler (e) {
    e.preventDefault()
    const email=e.target[0].value;
    const password=e.target[1].value;
  
    setLoader(true)
    try{
          if(email && password){
          await signInWithEmailAndPassword(auth, email, password);
            navigate('/screen');
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
        <h2 className="text-2xl text-white mb-4">Sign In</h2>
        <form onSubmit={submitHandler}>
          
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
            loader ? ( <button
              type="submit"
              className="flex justify-center w-full bg-red-600 text-white p-2 rounded hover:bg-red-700"
            >
              <Loader/>
            </button>):( <button
            type="submit"
            className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700"
          >
            Sign In
          </button>)
          }
          <div>
            <p className='text-white text-center mt-2'>New User ? <Link to='/register' className='text-red-700'>Register</Link></p>
          </div>
        </form>

{/* <div class="container"> */}
        {/* <div class="form-container">
            <h2>Sign Up</h2>
            <form id="signup-form">
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Sign Up</button>
            </form>
        </div>
        <div class="form-container">
            <h2>Sign In</h2>
            <form id="signin-form">
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Sign In</button>
            </form>
        </div> */}
    {/* </div> */}

      </div>
    </div>
      
       </div>
       <div className='loginScreen__gradient'/>

    </div>
  )
}

export default Login