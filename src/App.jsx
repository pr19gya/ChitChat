

import './App.css'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Chatroom from './pages/Chatroom'
import {Routes, Route } from "react-router-dom";
import Privateroute from './routes/Privateroute';
import { AuthProvider } from './context/Authcontext';

function App() {
  

  return (
    <>
    <AuthProvider>
    <Navbar/>
    <Routes>
      <Route path="/chat" element={<Privateroute><Chatroom/></Privateroute>}/>
      <Route path="/" element={<Login/>}/>
      </Routes>
      </AuthProvider>
    </>
  )
}

export default App
