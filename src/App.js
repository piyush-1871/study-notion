import './App.css';
import Navbar from './components/Navbar.js'
import Home from './pages/Home.js'
import Login from './pages/Login.js'
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'
import {Routes, Route} from 'react-router-dom'
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="w-screen h-screen bg-black flex flex-col overflow-x-hidden">
    
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
      
      
      </Routes>
    </div>
  );
}

export default App;
