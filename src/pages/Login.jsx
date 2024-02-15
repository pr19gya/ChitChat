import React, { useEffect } from 'react' 
import { UserAuth } from '../context/Authcontext'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate=useNavigate();
  const {currentUser, signInWithGoogle}=UserAuth();
  
  const handleLogin=async()=>{
    try{
      await signInWithGoogle();
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    if(currentUser){
      navigate("/chat");
    }
  },[currentUser])

  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there 🤗</h1>
      <p className="py-6">Welcome to ChitChat! Start chatting, connecting, and discovering new conversations with ease. Let's dive into the world of endless possibilities together!</p>
      <button onClick={handleLogin} className="btn bg-[#40E0D0] hover:bg-[#43B3AE] btn-primary">LOGIN WITH GOOGLE</button>
    </div>
  </div>
</div>
  )
}

export default Login