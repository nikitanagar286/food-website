import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Placeorder from './components/Placeorder';
import Footer from './components/Footer';
import LoginPopup from './components/Loginpopup/LoginPopup';


const App = () => {
  const [showLogin,setShowLogin] =useState(false);
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    
    <div className='app'>
      <Navbar setShowLogin ={setShowLogin}/>
      
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/order' element={<Placeorder/>}></Route>
        </Routes>
        
     
      
    </div>
    <Footer/>
    </>
  
    
    
  );
}

export default App;
