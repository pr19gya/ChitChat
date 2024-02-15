import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import {UserAuth} from "../context/Authcontext"
import { db} from '../firebase';

const Sendmessage = () => {
    const[msg, sendMsg]=useState("");
    const {currentUser}=UserAuth();

    const handleSendMessage=async(e)=>{
        e.preventDefault();

        if(msg.trim()===""){
          alert("Enter valid message!");
          return;
        }
        try{
          const {uid, displayName, photoURL}=currentUser;
          await addDoc(collection(db,"messages"),{
            text: msg,
            name:displayName,
            avatar: photoURL,
            createdAt: serverTimestamp(),
            uid
            
          })
        }catch(error){
          console.log(error);
        }
        
        sendMsg("");
    }


  return (
    <div className='bg-gray-300 fixed bottom-0 w-full py-10 shadow-lg'>
        <form onSubmit={handleSendMessage} className=' flex px-10'>
            <input value={msg} onChange={(e)=>sendMsg(e.target.value)} type="text" className=' text-black input w-full bg-gray-100 px-5 focus:outline-none rounded-r-none '/>
            <button type="submit" className='bg-gray-500 rounded-r-lg w-auto text-white px-5 '>Send</button>
        </form>
    </div>
  )
}

export default Sendmessage