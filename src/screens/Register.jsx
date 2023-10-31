import React, { useState } from 'react';
import './login.css';
import './register.css'
import loginBg from '../assest/login__bg.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Loader from '../Component/Loader';

function Register() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  async function submitHandler(e) {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    setLoader(true);

    try {
      if (email && password) {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate('/');
      }
    } catch (error) {
      console.log("error in registration form", error);
    }

    setLoader(false);
  }

  return (
    <div className="loginScreen" style={{ backgroundImage: `url(${loginBg})` }}>
      <div className="loginScreen__background">
        <img
          className=" loginScreen__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />

        <div className="flex justify-center items-center h-screen">
          <div className="bg-gray-800 bg-opacity-70 p-4 sm:p-6 md:p-8 lg:p-10 rounded shadow-md w-full sm:w-96 md:w-96 lg:w-96">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-white mb-4" id='h2'>
              Sign Up
            </h2>
            <form onSubmit={submitHandler} id="formHandle">
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

              {loader ? (
                <button
                  type="submit"
                  className="btn1 flex justify-center w-full bg-red-600 text-white p-2 rounded hover:bg-red-700"
                >
                  <Loader />
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn1 w-full bg-red-600 text-white p-2 rounded hover:bg-red-700"
                >
                  Sign Up
                </button>
              )}

              <p className="text-white text-center mt-2">
                Already Registered ?{' '}
                <Link to="/" className="text-red-700">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className="loginScreen__gradient" />
    </div>
  );
}

export default Register;
