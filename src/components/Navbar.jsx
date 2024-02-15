import React from 'react'
import { UserAuth } from '../context/Authcontext'

const Navbar = () => {
  const {currentUser, logOut}=UserAuth();

  const handleLogOut=async()=>{
    try{
      await logOut();
    }catch(error){
      console.log(error);
    }
  }

  return (
    <div className="navbar bg-[#40E0D0] flex justify-between px-10 text-primary-content">
    <button className="btn btn-ghost text-[2rem]">ChitChat!</button>
    {currentUser? <button onClick={handleLogOut} className="btn  text-[1rem]">Logout</button> : ""}
    </div>
  )
}

export default Navbar