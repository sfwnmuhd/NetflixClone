import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useState } from 'react'

const Login = () => {
  const [isSignInForm, setIsSignInForm]= useState(true);
  const toggleSignInForm =()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/>
      <div className="relative h-screen w-full">
            <img
          className="h-full w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Background"
        />
  
        <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col  bg-black/80 w-[400px] h-[500px] rounded-lg text-white p-6">
          <h1 className="text-3xl font-bold mb-5">{isSignInForm? "Sign In": "Sign Up"}</h1>
          {!isSignInForm &&<input className="w-full p-3 mb-4 bg-gray-700 rounded" type="text" placeholder="Full Name" />}
          <input className="w-full p-3 mb-4 bg-gray-700 rounded" type="text" placeholder="Email or Phone Number" />
          <input className="w-full p-3 mb-6 bg-gray-700 rounded" type="password" placeholder="Password" />
          <button className="w-full p-3 bg-red-600 rounded hover:bg-red-700 transition cursor-pointer">{isSignInForm? "Sign In": "Sign Up"}</button>
          <p className='py-4 underline cursor-pointer text-sm' onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up Now": "Already registered? Sign In Now"}</p>
        </form>
      </div>
      
      

      
    </div>
  )
}

export default Login